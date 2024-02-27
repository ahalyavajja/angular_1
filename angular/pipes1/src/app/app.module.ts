import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practise1Pipe } from './practise1.pipe';
import { SubPipe } from './sub.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Practise1Pipe,
    SubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
