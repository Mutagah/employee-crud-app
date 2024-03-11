import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../service/employees.service';

import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

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

  deleteEmployee(employeeId: number) {
    /*
    1. Pass the specific id of the employee you want to delete
    2. Open the confirmation modal of the delete functionality which can yes and no button. 
    */
    this.employees.getSpecificEmployee(employeeId).subscribe({
      next: (res: object) => {
        const modalRef = this.modal.open(DeleteModalComponent);
        modalRef.componentInstance.employeeData = res;
      },
    });
  }
}
