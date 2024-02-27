import { Component } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jokes: { setup: string, punchline: string, showPunchline: boolean }[] = [];

  constructor(private JS: JokeService) {}

  fetchJokes() {
    this.JS.fetchJokes().subscribe((data: any) => {
      // Initialize showPunchline property for each joke object
      this.jokes = data.map((joke: any) => ({ ...joke, showPunchline: false }));
    });
  }

  togglePunchline(joke: { setup: string, punchline: string, showPunchline: boolean }) {
    // Toggle the showPunchline property of the clicked joke
    joke.showPunchline = !joke.showPunchline;
  }
}
