import { ColleagueService } from './../../providers/colleague.service';
import { Observable, of, catchError, map } from 'rxjs';
import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi: true}]

})
export class PseudoValidatorDirective implements AsyncValidator {


  constructor(private colleagueService : ColleagueService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control?.value === null){
      return of(null)
    }

    return this.colleagueService.getPseudo(control?.value)
      .pipe(
        map(() => <ValidationErrors>{InvalidPseudo: "Ce pseudo existe déjà"}),
        catchError(() => of(null))
        )


  }

}
