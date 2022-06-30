import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowColleaguePage } from './show-colleague.page';



@NgModule({
  declarations: [
    ShowColleaguePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ShowColleaguePage
  ]
})
export class ShowColleagueModule { }
