import { Component, OnInit } from '@angular/core';

import { FormModalComponent } from '../form-modal/form-modal.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private modal: NgbModal
  ) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modal.open(FormModalComponent, { size: 'lg' });
  }
}
