import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  formTitle = 'Create Employee';
  employeeForm!: FormGroup;

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
    console.log(this.employeeForm)
    console.log(this.employeeForm.value)
  }
}
