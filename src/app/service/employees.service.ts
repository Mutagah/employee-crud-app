import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.employeesUrl);
  }

  createEmployee(employeeData: object): Observable<any> {
    return this.http.post(`${this.employeesUrl}`, employeeData);
  }
}
