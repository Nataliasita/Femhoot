import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formHome!:FormGroup 

  constructor(private formBuilder:FormBuilder) {
  
  }

  ngOnInit(): void {
    this.formHome = this.formBuilder.group({
      name_user:['',
      [
        Validators.required,
        Validators.minLength(4),
      ],
    ],
    });
  }
  
  send(){
    console.log(this.formHome!.value);
  }



}
