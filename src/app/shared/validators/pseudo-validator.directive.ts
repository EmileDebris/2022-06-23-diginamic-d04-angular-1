import { FullColleague } from './../../models/colleague';
import { ColleagueService } from './../../providers/colleague.service';
import { Observable, filter } from 'rxjs';
import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]

})
export class PseudoValidatorDirective {

  constructor(private colleagueService : ColleagueService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control.get("pseudo")?.value == null){
      return new Observable<null>();
    }
    let obj!:FullColleague | Error;
    this.colleagueService.getPseudo(control.get("pseudo")?.value).subscribe(col => obj = col)
    if (obj==undefined){
      return new Observable<ValidationErrors>()
    }
    return new Observable<null>();
    }

}
