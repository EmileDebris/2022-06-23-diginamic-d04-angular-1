import { AppRoutingModule } from './../app-routing.module';
import { CreateCollegueReactivePage } from './../pages/create-collegue-reactive/create-collegue-reactive.page';
import { CreateColleaguePage } from './../pages/create-colleague/create-colleague.page';
import { WelcomePage } from './../pages/welcome/welcome.page';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from '../shared/components/like-hate/like-hate.component';
import { ColleagueComponent } from '../shared/components/colleague/colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from '../shared/components/voting-history/voting-history.component';
import { CounterComponent } from '../shared/components/counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import { FirstLastValidatorDirective } from './validators/first-last-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { CreateCollegueReactiveFormsComponent } from './components/create-collegue-reactive-forms/create-collegue-reactive-forms.component';
import { MenuComponent } from './components/menu/menu.component';
import { Router, RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    FirstLastValidatorDirective,
    PseudoValidatorDirective,
    CreateCollegueReactiveFormsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    CreateCollegueReactiveFormsComponent,
    MenuComponent
  ]
})
export class SharedModule { }
