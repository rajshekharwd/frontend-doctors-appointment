import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllLocations } from '../../../../store/doctors/doctors.selectors';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { filterDoctorsByLocation } from '../../../../store/doctors/doctors.action';
import { DoctorFilter } from '../../../../core/models/doctor.model';


@Component({
  selector: 'app-hero-section',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
private store = inject(Store)
  allLocation$ = this.store.select(selectAllLocations);
  formGroup = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
  }) 
  //  const formValue = this.formGroup.value;

  onSearchDoctors(){
    const filter: DoctorFilter = {
    name: this.formGroup.value.name?.trim(),
    location: this.formGroup.value.location?.trim()
  };

  this.store.dispatch(filterDoctorsByLocation({ filter }));
  this.formGroup.reset();
   
  }
}
