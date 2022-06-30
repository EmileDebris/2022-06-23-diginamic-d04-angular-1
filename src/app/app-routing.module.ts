import { ShowColleaguePage } from './pages/show-colleague/show-colleague.page';
import { ColleagueComponent } from './shared/components/colleague/colleague.component';
import { CreateCollegueReactivePage } from './pages/create-collegue-reactive/create-collegue-reactive.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  {path:'colleagues', component: WelcomePage},
  {path:'form-template', component: CreateColleaguePage},
  {path:'form-reactive', component: CreateCollegueReactivePage},
  {path:'colleagues/:pseudo', component: ShowColleaguePage},
  {path:'', pathMatch:"full", redirectTo:'/colleagues'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
