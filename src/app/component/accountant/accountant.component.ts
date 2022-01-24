import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {

  min_question: number;
  seg_question: number;
  messsageTimer!:string;

  constructor() { 
    this.min_question = 2;
    this.seg_question =59;
    setInterval(()=> this.change(),1000);
  }

  ngOnInit(): void {

  }

  private change():void{
    if(--this.seg_question < 0){
      this.seg_question =59;
      this.min_question = --this.min_question;

    }
    if(this.seg_question < 0 || this.min_question < 0 ){
      this.reset();
    }
  }
  togglePause(){

  }
  reset(){
    this.min_question =0;
    this.seg_question=0;
    this.messsageTimer ='Time is up';
  }

}
