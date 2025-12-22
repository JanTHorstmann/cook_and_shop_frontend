import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Forms } from '../../shared/components/forms/forms';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Forms
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  // login_icon = "../../media/img/login_icon.png"
  // incorrectEntry: boolean = false

  //  loginData = new FormGroup({
  //       email: new FormControl('', [Validators.required, Validators.email]),
  //       password: new FormControl('', [Validators.required, Validators.minLength(6),
  //       ])
  //   })


  signIn(formValue: any) {
    console.log('Login submit:', formValue);
  }
}
