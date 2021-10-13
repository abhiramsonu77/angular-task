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

  getCurrentItem(id: Number) {
    return this.http.get('https://abhiram-api-rest.herokuapp.com/items/' + id);
  }

  updateItem(id: Number, data: item) {
    return this.http.patch(
      'https://abhiram-api-rest.herokuapp.com/items/' + id,
      data
    );
  }
}
