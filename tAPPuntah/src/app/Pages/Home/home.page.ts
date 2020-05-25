import { Component } from '@angular/core';
import { EventoService } from 'src/app/Services/Event/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  events = [];

  constructor(public evnSrv: EventoService) {
    this.getAllEvents();
  }

  getAllEvents() {
    this.evnSrv.getEvents().subscribe((datos: any[]) => this.events = datos);
  }

}
