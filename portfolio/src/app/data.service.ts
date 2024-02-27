import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }
  getData()
  {
    return this.hc.get(`https://fakestoreapi.com/products`)
  }
  get(id:any){
    return this.hc.get(`https://fakestoreapi.com/products/${id}`);
  }
}
