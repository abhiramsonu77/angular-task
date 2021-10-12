import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component : MainComponent
  },
  {
    path : 'login', 
    component : LoginComponent
  },
  {
  path: 'items',
  canActivate: [AuthGuard],
  loadChildren: () =>
      import('./items/items.module').then((mod) => mod.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
