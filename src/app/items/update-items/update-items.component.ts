import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private itemService: ItemService,
    
    private _router: Router,
    private formBuilder: FormBuilder) { }
    itemData: any;
    editItemForm = this.formBuilder.group({
      id: [''],
      itemName: [''],
      itemPrice: [''],
    });

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);

    this.itemService
      .getCurrentItem(this.router.snapshot.params.id)
      .subscribe((result) => {
        this.itemData = result;
        console.log(result);
        
        this.editItemForm = this.formBuilder.group({
          id: [this.itemData.id],
          itemName: [this.itemData.itemName],
          itemPrice: [this.itemData.itemPrice],
        });
      });
  }

  editItem() {
    console.log(this.editItemForm.value);
    this.itemService
      .updateItem(this.router.snapshot.params.id, this.editItemForm.value)
      .subscribe((results) => {
        console.log(results);
        this._router.navigate(['items/view-items']);
      });
  }
}
