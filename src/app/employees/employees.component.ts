import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../service/employees.service';

import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';

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

  viewEmployee(employeeId: number) {
    /*
    1.Open a modal that contains the selected employee details
    2. You need to make a fetch request to gettting a specific employee record.
     */
    this.employees.getSpecificEmployee(employeeId).subscribe({
      next: (res: any) => {
        const modalRef = this.modal.open(EmployeeModalComponent);
        modalRef.componentInstance.employeeData = res;
        console.log(res)
      },
    });
  }
}
