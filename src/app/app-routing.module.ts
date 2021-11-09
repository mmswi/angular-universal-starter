import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';

const routes: Routes = [
  {
    path: 'first-component', component: FirstComponent
  },
  {
    path: 'second-component', component: SecondComponent
  },
  {
    path: 'my-first-route', component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
