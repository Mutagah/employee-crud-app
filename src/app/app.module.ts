import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';

import { EmployeesService } from './service/employees.service';
import { ToastService } from './toast.service';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    NavbarComponent,
    FormModalComponent,
    DeleteModalComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
    NgTemplateOutlet
  ],
  providers: [EmployeesService,ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}