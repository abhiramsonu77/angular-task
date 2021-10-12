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

  getPosts() {
    this.itemService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  ngOnInit(): void {
    this.getPosts();
  }


}