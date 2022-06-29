import { Observable, of } from 'rxjs';
import { AddColleague, FullColleague } from './../../../models/colleague';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'tc-create-collegue-reactive-forms',
  templateUrl: './create-collegue-reactive-forms.component.html',
  styleUrls: ['./create-collegue-reactive-forms.component.scss']
})
export class CreateCollegueReactiveFormsComponent implements OnInit {

  formColleague: FormGroup

  constructor(private fb: FormBuilder, private colleagueServ:ColleagueService) {
    this.formColleague = fb.group({
      pseudo:['',{
        validators: [Validators.required],
        asyncValidators : [this.validerPseudo]
      }],
      last:['', [Validators.minLength(2), Validators.required]],
      first:['', [Validators.minLength(2), Validators.required]],
      photo:['', [Validators.required]]
    }, {validator: this.validerFirstLast})
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

  get firstLastInvalid(){
    if (this.formColleague.errors != null){
      return "firstLast" in this.formColleague.errors
    }
    return false
  }

  validerFirstLast(control:AbstractControl):ValidationErrors | null{
    if (control.get("last")?.pristine || control.get("first")?.pristine || control.get("last")?.value == "" || control.get("first")?.value == "" ){
      return null
    }
    const last = control.get("last")?.value
    const first = control.get("first")?.value
    if(last == first){
      return { firstLast : 'first name must be different from last name' }
    }
    return null;
  }

  collegue:FullColleague={
    pseudo: '',
    last: '',
    first: '',
    photo: '',
    score:0
  };

  validerPseudo(control:FormControl):Observable<ValidationErrors | null>{
    if (control.value === null){
      return new Observable<null>();
    }

    this.colleagueServ.getPseudo(control.value).subscribe(col => this.collegue = col, () => {})

    if(this.collegue.first != ''){
      this.collegue={
        pseudo: '',
        last: '',
        first: '',
        photo: '',
        score:0
      };
      return of({InvalidPseudo: "ce pseudo existe déjà"})
    }
     return new Observable<null>();
  }

  ngOnInit(): void {
  }

}
