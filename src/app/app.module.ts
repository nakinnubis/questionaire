import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatCardModule} from '@angular/material';

import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import {  QuestionComponent} from "./question.component";


@NgModule({
  declarations: [
    AppComponent,QuestionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule, 
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
