import { AddColleague } from './../../../models/colleague';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tc-create-collegue-reactive-forms',
  templateUrl: './create-collegue-reactive-forms.component.html',
  styleUrls: ['./create-collegue-reactive-forms.component.scss']
})
export class CreateCollegueReactiveFormsComponent implements OnInit {

  formColleague: FormGroup

  constructor(private fb: FormBuilder, private colleagueServ:ColleagueService) {
    this.formColleague = fb.group({
      pseudo:['', [Validators.required]],
      last:['', [Validators.minLength(2), Validators.required]],
      first:['', [Validators.minLength(2), Validators.required]],
      photo:['', [Validators.required]]
    })
  }

  valider(){
    let newColleague:AddColleague = {
      pseudo: this.formColleague.get("pseudo")?.value,
      last: this.formColleague.get("last")?.value,
      first: this.formColleague.get("first")?.value,
      photo: this.formColleague.get("photo")?.value
    }
    this.colleagueServ.addColleague(newColleague).subscribe(colleague => newColleague = colleague)
  }

  get pseudoInvalid(){
    return this.formColleague.controls['pseudo'].dirty && this.formColleague.controls['pseudo'].invalid
  }

  get lastInvalid(){
    return this.formColleague.controls['last'].dirty && this.formColleague.controls['last'].invalid
  }

  get firstInvalid(){
    return this.formColleague.controls['first'].dirty && this.formColleague.controls['first'].invalid
  }

  get photoInvalid(){
    return this.formColleague.controls['photo'].dirty && this.formColleague.controls['photo'].invalid
  }

  ngOnInit(): void {
  }

}
