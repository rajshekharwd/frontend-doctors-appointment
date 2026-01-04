import { Doctor, DoctorFilter } from "../../core/models/doctor.model";

export interface DoctorsState{
    doctors: Doctor[],
    loading?:boolean
    filter: DoctorFilter;
}

export const initialDoctorsState: DoctorsState ={
   doctors: [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialization: "Cardiologist",
    experience: 12,
    rating: 4.9,
    reviews: 120,
    location: {
      city: "Bengaluru",
      clinic: "Apollo Heart Centre"
    },
    availableSlots: [
      { time: "9:00 AM", status: "available" },
      { time: "2:00 PM", status: "limited" }
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Brown",
    specialization: "Dermatologist",
    experience: 8,
    rating: 4.7,
    reviews: 98,
    location: {
      city: "Mumbai",
      clinic: "Skin & Care Clinic"
    },
    availableSlots: [
      { time: "9:00 AM", status: "available" },
      { time: "2:00 PM", status: "limited" }
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialization: "Gynecologist",
    experience: 10,
    rating: 4.8,
    reviews: 110,
    location: {
      city: "Hyderabad",
      clinic: "Women's Wellness Hospital"
    },
    availableSlots: [
      { time: "9:00 AM", status: "available" },
      { time: "2:00 PM", status: "limited" }
    ]
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    specialization: "Orthopedic Surgeon",
    experience: 15,
    rating: 4.6,
    reviews: 150,
    location: {
      city: "Chennai",
      clinic: "Ortho Plus Hospital"
    },
    availableSlots: [
      { time: "9:00 AM", status: "available" },
      { time: "2:00 PM", status: "limited" }
    ]
  },
  {
    id: 5,
    name: "Dr. Ananya Sharma",
    specialization: "Pediatrician",
    experience: 6,
    rating: 4.5,
    reviews: 85,
    location: {
      city: "Delhi",
      clinic: "Kids Care Clinic"
    },
    availableSlots: [
      { time: "9:00 AM", status: "available" },
      { time: "2:00 PM", status: "limited" }
    ]
  }
],
    loading: false,
    filter: {
    name: '',
    location: ''
  }
}