import { createAction, props } from "@ngrx/store";
import { DoctorFilter } from "../../core/models/doctor.model";

export const loadDoctors = createAction('[Doctors] Load Doctors');

export const filterDoctorsByLocation = createAction(
  '[Doctors] Filter Doctors By Location',
    props<{ filter: DoctorFilter }>()
);