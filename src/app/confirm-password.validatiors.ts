import { AbstractControl, FormGroup } from "@angular/forms";


export function ConfirmPasswordValidator(password: string, passwordMatch: string) {
   
        return (formGroup: FormGroup) => {
      let Password = formGroup.controls[password];
      let confirmPassword = formGroup.controls[passwordMatch]
    
      if (
        confirmPassword.errors &&
        !confirmPassword.errors.confirmPasswordValidator
      ) {
      
        return;
      }
      if (Password.value !== confirmPassword.value) {
       
        confirmPassword.setErrors({ confirmPasswordValidator: true });
      
      } else {
        confirmPassword.setErrors(null);
      }
    };
  }