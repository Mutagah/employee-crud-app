import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { EmployeesService } from '../service/employees.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnDestroy {
  @Input() employeeData!: any;
  @ViewChild('myForm', { static: true }) myForm: any;
  constructor(
    public activeModal: NgbActiveModal,
    private employees: EmployeesService,
    private toastService: ToastService
  ) {}

  onSubmit(form: any) {
    if (
      form.value.firstName === this.employeeData.firstName &&
      form.value.lastName === this.employeeData.lastName
    ) {
      this.employees.deleteSpecificEmployee(this.employeeData.id).subscribe({
        next: (res: any) => {
          this.toastService.show(`Employee ${form.value.firstName} ${form.value.lastName} records deleted successfully`, {
            classname: 'bg-success text-light',
            delay: 2000,
          });
          form.reset();
          setTimeout(() => this.activeModal.close(), 50);
        },
      });
    }
  }
  ngOnDestroy(): void {
    setTimeout(() => {
      this.toastService.clear();
    }, 6000);
  }
}
