import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import {TransferHttpCacheModule} from '@nguniversal/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {metaReducers, reducers} from './store/reducers';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
