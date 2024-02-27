import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'

})
export class JokeService {

  constructor(private aha:HttpClient) { }
  fetchJokes(){
    return this.aha.get(`https://api.sampleapis.com/jokes/goodJokes`);
  }
}
