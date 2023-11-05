import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
@Component({
    selector: 'dashboard-add-room',
    templateUrl: './add-room.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        NgClass,
        NgIf,
    ],
    
})
export class AddRoomComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(private _formBuilder: FormBuilder, private readonly _router: Router) {}
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      area: ['', Validators.required],
      price: ['', Validators.required],
      facility: ['', Validators.required],
      room_types_id: ['', Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
  }
}   

