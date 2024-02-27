import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  names=["Ahalya","Aravind","Bhula","Prasad"];
  product:any[]=[];
  constructor() {
    fetch('https://fakestoreapi.com/products')
      .then((res)=>res.json())
      .then((data)=>{console.log(data);this.product=data});
  }

}
