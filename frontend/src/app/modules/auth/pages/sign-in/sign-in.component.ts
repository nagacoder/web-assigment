import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../../core/services/auth/auth.service'
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
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
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

  constructor(private readonly _formBuilder: FormBuilder, private authService : AuthService, private readonly _router: Router) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value).subscribe(
      (data: any) => {
        console.log(data)
        if (data.status) {
          localStorage.setItem('access_token', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          setTimeout(()=>{
            this._router.navigate(['/']);
          },2000)
        }
      },
      (error) => {
        console.log("errr",error)
      }
    );

    
  }
}
