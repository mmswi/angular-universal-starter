import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {APP_INITIALIZER, NgModule, Injector} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {Store, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {AngularSvgIconModule, SvgLoader} from 'angular-svg-icon';

import {environment} from '@src/environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StateTransferFactory} from './factories/state-transfer.factory';
import {HTTPInterceptor} from './interceptors/http.interceptor';
import {TransferStateService} from './services/transfer-state.service';
import {metaReducers, reducers} from './store/reducers';
import {svgLoaderFactory} from './factories/svg-loader.factory';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    HttpClientModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge   : 25, // Retains last 25 states
      logOnly  : environment.production, // Restrict extension to log-only mode
      autoPause: true // Pauses recording actions and state changes when the extension window is not open
    }),
    AngularSvgIconModule.forRoot({
      loader: {
        provide   : SvgLoader,
        useFactory: svgLoaderFactory,
        deps      : [HttpClient, TransferStateService, Injector],
      },
    }),
    TransferHttpCacheModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide   : APP_INITIALIZER,
      useFactory: StateTransferFactory,
      deps      : [TransferStateService, Injector, Store],
      multi     : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: HTTPInterceptor,
      multi   : true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
