import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  @Input() isLogin = false;
  @Input() submitButton = 'Submit';
  @Input() serverError: string | null = null;

  @Output() formSubmit = new EventEmitter<{ email: string; password: string }>();

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.formSubmit.emit(this.form.value as any);
  }

  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }
}
