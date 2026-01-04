import { Component } from '@angular/core';
import { HeroSection } from "./hero-section/hero-section";
import { DoctorsList } from "./doctors-list/doctors-list";

@Component({
  selector: 'app-home',
  imports: [HeroSection, DoctorsList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
