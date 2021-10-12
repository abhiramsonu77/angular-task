import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {
  path: 'items',
  canActivate: [AuthGuard],
  component : ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
