import { Component } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jokes: any[] = [];

  constructor(private js: JokeService) {
    this.js.getData().subscribe((data: any) => {
      this.jokes = data.map((joke: any) => ({ ...joke, showPunchline: false }));
    });
  }

  showPunchline(joke: any) {
    joke.showPunchline = !joke.showPunchline;
  }
}
