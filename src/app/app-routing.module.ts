import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "register",
    loadChildren: () => import('./public/pages/Register/login.module').then(m => m.LoginModule)
  },
  {
    path: "contacts",
    loadChildren: () => import('./public/pages/contact-list/contact-list.module').then(m => m.ContactListModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
