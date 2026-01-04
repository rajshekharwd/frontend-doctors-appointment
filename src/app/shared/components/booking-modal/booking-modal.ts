import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-booking-modal',
  imports: [],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.scss',
})
export class BookingModal {
  @Input() title!: string;
  @Input() message!: string;
  @Input() notBooked: boolean = false;

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
  confirmBooking() {
    this.confirmed.emit();
  }
}
