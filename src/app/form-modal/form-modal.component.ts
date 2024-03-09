import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  formTitle = 'Create Employee';
  employeeForm!: FormGroup;
  showModal!: boolean;

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      gender: new FormControl('male'),
      age: new FormControl(null, [Validators.required, Validators.min(22)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      role: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);
  }
}
