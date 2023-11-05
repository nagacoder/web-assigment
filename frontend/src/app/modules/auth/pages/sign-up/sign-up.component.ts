import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service'
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        AngularSvgIconModule,
        NgClass,
        NgIf,
    ],
})
export class SignUpComponent implements OnInit {
  formRegister!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  constructor(private _formBuilder: FormBuilder, private authService : AuthService, private readonly _router: Router) {}
  ngOnInit(): void {
    this.formRegister = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },{
      validator: this.passwordMatchValidator // Add the custom validator here
    });
  }
  get f() {
    return this.formRegister.controls;
  }
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }
  }
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.formRegister.value;
    console.log("formRegister", this.formRegister)
    // stop here if form is invalid
    if (this.formRegister.invalid) {
      return;
    }
    this.authService.registerUser(this.formRegister.value).subscribe(
      (data: any) => {
        console.log(data)
        if (data.status) {
          localStorage.setItem('access_token', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          setTimeout(()=>{
            this._router.navigate(['/auth/sign-in']);
          },2000)
        }
      },
      (error) => {
        console.log("errr",error)
      }
    );

    
  }
}
