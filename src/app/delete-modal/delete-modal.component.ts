import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  @Input() employeeData!: any;
  @ViewChild('myForm', { static: true }) myForm: any;
  constructor(
    public activeModal: NgbActiveModal,
    private employees: EmployeesService
  ) {}

  

  onSubmit(form: any) {
    console.log(form)
    if (
      form.value.firstName === this.employeeData.firstName &&
      form.value.lastName === this.employeeData.lastName
    ) {
      this.employees.deleteSpecificEmployee(this.employeeData.id).subscribe({
        next: (res: any) => {
          form.reset();
          this.activeModal.close();
        },
      });
    }
  }
}
