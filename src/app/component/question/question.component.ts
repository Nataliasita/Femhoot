import { Component, OnInit } from '@angular/core';
import{ QuestionsService} from './services/questions.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  good=1
  bad=0
  items=[]



  constructor(public itemService:QuestionsService) {
    console.log(itemService)

   }

  ngOnInit(): void {
  }
  
  selected(){

  }


}
