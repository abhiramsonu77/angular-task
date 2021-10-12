import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface item {
  id: Number;
  itemName: string;
  itemPrice: string;
}

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<item> {
    return this.http.get<item>('https://abhiram-api-rest.herokuapp.com/items');
  }

  addItems(data: item){
  return this.http.post('https://abhiram-api-rest.herokuapp.com/items', data);
  }
}
