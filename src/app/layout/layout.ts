import { Component } from '@angular/core';
import { Header } from "../features/components/header/header";
import { Footer } from "../features/components/footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
