import { Component, EventEmitter, Output, output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();
  isLoginMode = true;
 loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onLogin() {
    if (this.loginForm.invalid) return;

    console.log('Login Data:', this.loginForm.value);
    // dispatch login action / call API
  }

  registerForm = new FormGroup(
  {
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  },
  { validators: this.passwordMatch }
);

passwordMatch(control: AbstractControl) {
  const group = control as FormGroup;
  return group.get('password')?.value === group.get('confirmPassword')?.value
    ? null
    : { mismatch: true };
}

  onRegister() {
    if (this.registerForm.invalid) return;

    console.log('Customer Register Data:', this.registerForm.value);
    // Dispatch NgRx action or API call
  }
  toggleMode() {
  this.isLoginMode = !this.isLoginMode;
}
closeForm() {
  this.closed.emit();
}
}
