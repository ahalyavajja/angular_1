import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies:any[]=[];
  isDark=false;
  st!:string;
  isSuccess = false
search(){
    fetch(`https://www.omdbapi.com/?s=${this.st}&apikey=ce5830c8`)
      .then((res) => res.json())
      .then((data)=>{this.movies=data.Search;
      this.isSuccess=true
    });
}
changetheme(){
  if(this.isDark)
    this.isDark=false
  else
    this.isDark=true
}
}