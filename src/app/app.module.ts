import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { EmployeesService } from './service/employees.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FormModalComponent } from './form-modal/form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    NavbarComponent,
    FormModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
