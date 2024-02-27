import { Component } from '@angular/core';
import { PipeService } from './pipe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  jokes: any[]=[];
  constructor(private js: PipeService){
    this.js.getData().subscribe((data: any) => {
      this.jokes = data.map((joke: any) => ({ ...joke, showPunchline: false }));
    });
  }
  showPunchline(joke : any){
    joke.showPunchline=! joke.showPunchline;
  }
}
