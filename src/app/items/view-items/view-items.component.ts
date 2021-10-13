import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  constructor(private itemService: ItemService) {}
  items: any;

  getItemList() {
    this.itemService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items);
      },
    );
  }
  ngOnInit(): void {
    this.getItemList();
  }
  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(
      (deletedData) => {},
      (error) => {
        console.log(error);
      }
    );

    this.getItemList();
    console.log(this.getItemList());
  }
}
