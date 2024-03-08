import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title = 'Tabulated Employees';

  constructor(private employees: EmployeesService) {}
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
}
