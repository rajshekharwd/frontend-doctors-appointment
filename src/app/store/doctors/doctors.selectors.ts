import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DoctorsState } from "./doctores.state";

export const selectDoctorsState = createFeatureSelector<DoctorsState>('doctors');

export const selectAllDoctors  = createSelector(
    selectDoctorsState,
    state => state.doctors
)

export const selectLoadingDoctors = createSelector(
    selectDoctorsState,
    state => state.loading
)

export const selectAllLocations = createSelector(
    selectDoctorsState,
    state => state.doctors.map(doctor => doctor.location.city)
)
export const selectFilteredDoctores = createSelector(
    selectDoctorsState,
   (state) =>{
   
     const {name, location} = state.filter;
    if(location == 'All Locations'){
        return state.doctors;
    }else{
 return state.doctors.filter(doctor =>{
        const matchname = !name || doctor.name?.toLowerCase().includes(name.toLowerCase());
        const matchlocation = !location || doctor.location?.city.toLowerCase().includes(location.toLowerCase());
        return matchname && matchlocation;
      });
    }
     

   }

    // state => state.doctors.filter(doctor => doctor.location.city === state.filter)   
)
