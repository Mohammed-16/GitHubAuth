import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectUriComponent } from './redirect-uri/redirect-uri.component';

const routes: Routes = [
 {path: 'Redirect_URI', component: RedirectUriComponent} ,
 {path: 'App_Component', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
