import { APP_INITIALIZER, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { TransferHttpCacheModule } from '@nguniversal/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateTransferFactory } from './factories/state-transfer.factory';
import { TransferStateService } from './services/transfer-state.service';
import { metaReducers, reducers } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    TransferHttpCacheModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: StateTransferFactory,
      deps: [TransferStateService, Injector, Store],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
