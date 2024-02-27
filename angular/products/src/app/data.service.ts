import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc: HttpClient) { }
  getproducts(){
    return this.hc.get('https://dummyjson.com/products');
  }
  getSearchProducts(name:any){
    return this.hc.get(`https://dummyjson.com/products/search?q=${name}`);//the use of `` is we can give value manually for search or anything like this "${}" and it is called template literal
    
  }
  getCategoryProducts(cate:any)
  {
    return this.hc.get(`https://dummyjson.com/products/category/${cate}`);
  }
}
