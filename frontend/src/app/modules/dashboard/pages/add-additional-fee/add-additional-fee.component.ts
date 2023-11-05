import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
@Component({
    selector: 'dashboard-add-additional-fee',
    templateUrl: './add-additional-fee.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        NgClass,
        NgIf,
    ],
    
})
export class AddAdditionalFeeComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(private _formBuilder: FormBuilder, private readonly _router: Router) {}
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
  }
}   

