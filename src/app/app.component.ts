import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from "./confirm-password.validatiors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitHub-project';
  submitted=false
  public showPassword: boolean;
  public showCPassword: boolean;
  
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );
  }
   submit(data){

   console.log(data)
   }
  ngOnInit(): void {
    console.log("lll")
  }



}