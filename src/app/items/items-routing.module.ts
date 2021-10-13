import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateItemsComponent } from './update-items/update-items.component';
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
              path: 'add-items',
              component: AddItemsComponent,
            },
      
            {
              path: 'update-items/:id',
              component: UpdateItemsComponent,
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
