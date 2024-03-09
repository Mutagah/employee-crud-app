import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeesService } from '../service/employees.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent {
  @Input() formData: any;
  updateMode: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private employeeService: EmployeesService
  ) {}

  formTitle = 'Create Employee';
  employeeForm!: FormGroup;
  showModal!: boolean;

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(
        this.formData ? this.formData.firstName : null,
        [Validators.required, Validators.minLength(3)]
      ),
      lastName: new FormControl(this.formData ? this.formData.lastName : null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      gender: new FormControl(this.formData ? this.formData.gender : 'male'),
      age: new FormControl(this.formData ? this.formData.age : null, [
        Validators.required,
        Validators.min(22),
      ]),
      email: new FormControl(this.formData ? this.formData.email : null, [
        Validators.required,
        Validators.email,
      ]),
      role: new FormControl(
        this.formData ? this.formData.role : null,
        Validators.required
      ),
      image: new FormControl(
        this.formData ? this.formData.image : null,
        Validators.required
      ),
    });
  }

  onSubmit() {
    if (this.updateMode && this.employeeForm.valid) {
      this.employeeService
        .patchEmployee(this.formData.id, this.employeeForm.value)
        .subscribe((response) => response);
    } else if (!this.updateMode && this.employeeForm.valid) {
      this.employeeService
        .createEmployee(this.employeeForm.value)
        .subscribe((response) => response);
    }
    this.employeeForm.reset();
    this.activeModal.close();
  }
}
