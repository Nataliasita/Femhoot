import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AccountantComponent } from './component/accountant/accountant.component';
import { QuestionComponent } from './component/question/question.component';
import {QuestionsService} from './component/question/services/questions.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountantComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
