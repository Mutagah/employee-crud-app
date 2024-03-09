import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../service/employees.service';

import { FormModalComponent } from '../form-modal/form-modal.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title = 'Tabulated Employees';

  constructor(private employees: EmployeesService, private modal: NgbModal) {}
  employeesList!: any;
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employees.getEmployees().subscribe({
      next: (res: any) => {
        return (this.employeesList = res);
      },
    });
  }

  updateRecord(employeeId: number) {
    /*
    1. Opening of the modal
    2. Fetch that specific record and prefill the inputs with that data
    3. Update the record
    4. Close the modal 
     */

    this.employees.getSpecificEmployee(employeeId).subscribe({
      next: (res: any) => {
        const modalRef = this.modal.open(FormModalComponent, { size: 'lg' });
        modalRef.componentInstance.formData = res;
        modalRef.componentInstance.updateMode = true;
      }
    });
  }
}
