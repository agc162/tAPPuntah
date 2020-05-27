import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../Services/Event/evento.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  events = [];

  constructor(public evnSrv: EventoService) {
    this.getMeEvents();
  }

  getMeEvents() {
    this.evnSrv.getEvents().subscribe((datos: any[]) => {
      this.events = datos.filter((dato) => dato.user == '@DonJC')  
    });
  }

}
