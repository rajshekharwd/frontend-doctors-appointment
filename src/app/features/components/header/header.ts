import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Login } from '../../auth/login/login';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
@ViewChild('modalHost', { read: ViewContainerRef })
  modalHost!: ViewContainerRef;

  openModal() {
    this.modalHost.clear();   // clear previous
     const modalRef1 = this.modalHost.createComponent(Login);
       modalRef1.instance.closed.subscribe(() => {
    modalRef1.destroy();
  });
}
}
