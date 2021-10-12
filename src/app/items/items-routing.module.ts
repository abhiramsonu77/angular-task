import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewItemsComponent } from './view-items/view-items.component';

const routes: Routes =[
        {
          path: '',
          component: DashboardComponent ,
          children: [
            {
              path: 'view-items',
              component: ViewItemsComponent,
            },
            {
              path: '',
              redirectTo: 'view-items',
              pathMatch: 'full',
            },
          ],
        },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ItemsRoutingModule {}
