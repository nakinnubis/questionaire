import { Component } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  // template: 'The Questionaire App<button md-button>Click me<button>'
})
export class QuestionComponent {
  title = 'Questionaire';
  // post(){
  //   console.log("Test to see btn works");
  // }
  post(questionTitle, questionBody,selectedOption) {
    console.log("Title is below");
    console.log(questionTitle);
    console.log("the Message is below")
    console.log(questionBody);
    console.log("My age is below");
    console.log(selectedOption);
  }
}
