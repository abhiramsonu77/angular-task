import { NgModule } from '@angular/core';
import { ViewItemsComponent } from './view-items/view-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from '../item.service';
import { AddItemsComponent } from './add-items/add-items.component';
import { UpdateItemsComponent } from './update-items/update-items.component';

@NgModule({
    declarations: [
        ViewItemsComponent,
        DashboardComponent,
        AddItemsComponent,
        UpdateItemsComponent
    ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
    providers:[ItemService]
    })
export class ItemsModule {}