import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PipeService {

  constructor(private hc:HttpClient) {
   }
   getData(){
    return this.hc.get(`https://api.sampleapis.com/jokes/goodJokes`)
   }
}
