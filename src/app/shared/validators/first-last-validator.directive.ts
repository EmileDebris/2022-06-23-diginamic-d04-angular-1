import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective, multi: true}]
})
export class FirstLastValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.get("first")?.value == null || control.get("last")?.value == null || control.get("first")?.value == "" || control.get("last")?.value == ""){
      return null;
    }
    return control.get("first")?.value != control.get("last")?.value ? null : { firstLast : 'first name must be different from last name' };
    }

}
