import { Doctor } from './../../core/models/doctor.model';
import { createReducer, on } from "@ngrx/store";
import { initialDoctorsState } from "./doctores.state";
import * as DoctorsActions from './doctors.action'


export const doctorsReducer = createReducer(
    initialDoctorsState,
    on(DoctorsActions.loadDoctors, state =>({
        ...state,
        loading: false
    })),
   on(DoctorsActions.filterDoctorsByLocation, (state, { filter }) => ({
  ...state,
  filter
}))

)