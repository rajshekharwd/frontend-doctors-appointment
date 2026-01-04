export interface DoctorLocation {
  city: string;
  clinic: string;
}

export interface DoctorSlot {
  time: string;
  status: 'available' | 'limited' | 'booked';
}

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  reviews: number;
  location: DoctorLocation;
  availableSlots: DoctorSlot[];
}
export interface DoctorFilter {
  name?: string;
  location?: string;
}