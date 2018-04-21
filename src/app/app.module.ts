import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatSelectModule} from '@angular/material';


import { AppComponent } from './app.component';
import {  QuestionComponent} from "./question.component";


@NgModule({
  declarations: [
    AppComponent,QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
