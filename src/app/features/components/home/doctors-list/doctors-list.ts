import { Component, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDoctors } from '../../../../store/doctors/doctors.action';
import { selectAllDoctors, selectFilteredDoctores, selectLoadingDoctors } from '../../../../store/doctors/doctors.selectors';
import { AsyncPipe, CommonModule,  } from '@angular/common';
import { BookingModal } from '../../../../shared/components/booking-modal/booking-modal';
import { Login } from '../../../auth/login/login';

@Component({
  selector: 'app-doctors-list',
  imports: [ CommonModule],
  templateUrl: './doctors-list.html',
  styleUrl: './doctors-list.scss',
})
export class DoctorsList implements OnInit {
private store = inject(Store);
selectedSlots: Record<number, string | null> = {};

doctors$ = this.store.select(selectFilteredDoctores)
loading$ = this.store.select(selectLoadingDoctors)

ngOnInit(): void {

this.store.dispatch(loadDoctors())
  
}
onBookAppointment(doctorName: string, doctorId: number) {
  const selectedSlot = this.selectedSlots[doctorId];
  this.openModal(doctorId, doctorName, selectedSlot);
}
bookSlot(doctorId: number, slotTime: string) {
  this.selectedSlots[doctorId] = slotTime;
}

@ViewChild('modalHost', { read: ViewContainerRef })
modalHost!: ViewContainerRef;

openModal(doctorId?: any, doctorName?: any, slotTime?: any) {
  this.modalHost.clear();

  const isLoggedIn = true; // replace with real auth check
  const modalRef = this.modalHost.createComponent(BookingModal);

  // ❌ Case 1: Not logged in
  if (!isLoggedIn) {
    modalRef.instance.title = 'Please login to book an appointment.';
    modalRef.instance.notBooked = true;
    this.handleClose(modalRef);
    return;
  }

  // ❌ Case 2: Slot not selected
  if (!slotTime) {
    modalRef.instance.title = 'Please select a slot before booking.';
    modalRef.instance.notBooked = true;
    this.handleClose(modalRef);
    return;
  }

  // ✅ Case 3: Logged in + Slot selected
  modalRef.instance.title = 'Confirm Appointment';
  modalRef.instance.message = `Confirm booking with Dr. ${doctorName} at ${slotTime}?`;
  modalRef.instance.notBooked = false;

  modalRef.instance.confirmed.subscribe(() => {
    alert('Booking confirmed!');
    modalRef.destroy();
  });

  this.handleClose(modalRef);
}

private handleClose(modalRef: any) {
  modalRef.instance.closed.subscribe(() => {
    modalRef.destroy();
  });
}

}