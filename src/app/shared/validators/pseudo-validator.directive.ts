import { FullColleague } from './../../models/colleague';
import { ColleagueService } from './../../providers/colleague.service';
import { Observable, filter, of, from } from 'rxjs';
import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]

})
export class PseudoValidatorDirective {

  obj:FullColleague= {
    pseudo: '',
    last: '',
    first: '',
    photo: '',
    score:0
  };

  constructor(private colleagueService : ColleagueService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control.get("pseudo")?.value === null){
      return new Observable<null>();
    }

    this.colleagueService.getPseudo(control.get("pseudo")?.value).subscribe(col => this.obj = col, () => {})

    if(this.obj.first != ''){
      this.obj={
        pseudo: '',
        last: '',
        first: '',
        photo: '',
        score:0
      };
      return of(this.obj)
    }
     return new Observable<null>();
  }

}
