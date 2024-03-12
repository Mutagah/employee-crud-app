import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeesService } from '../service/employees.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private employeeService: EmployeesService
  ) {}

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
    console.log(this.employeeForm.value);
    // Posting my data to the json file
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe((response) =>
        console.log('Post Successful', response)
      );
      this.employeeForm.reset()
      this.activeModal.close()
    } else {
      console.log('Cannot post you have an error in your form');
    }
  }
}
