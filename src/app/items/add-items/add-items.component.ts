import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(    
    private itemService: ItemService,
    private _router: Router,
    private formBuilder: FormBuilder) { }

    addItemForm = this.formBuilder.group({
      id: [''],
      itemName: [''],
      itemPrice: [''],
    });
    ngOnInit(): void {}
    addItem() {
      this.itemService.addItems(this.addItemForm.value).subscribe((result) => {
        console.log(result);
      });
  
      window.alert('Added new Item');
      this._router.navigate(['items/view-items']);
    }
  }
