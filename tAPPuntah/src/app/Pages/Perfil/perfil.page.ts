import { Component } from '@angular/core';
import { EventoService } from '../../Services/Event/evento.service';
import { Event } from 'src/app/Models/Event/event.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  events: Event[] = [];

  constructor(public evnSrv: EventoService) {
     this.getMeEvents();
  }

  getMeEvents() {
    this.evnSrv.getEvents().subscribe((datos: Event[]) => {
      for (const item of datos) {
        if(item.user === '@DonJC') {
          this.events.push(item);
        }
      }
    });
  }


  // Event

  generateURL(idEvent) {
    return 'tAPPuntah/evento/' + idEvent;
  }

  generateURLComment(idEvent) {
    return 'tAPPuntah/evento/' + idEvent + '/comments';
  }

  doFollow(post: string){
    for (const item of this.events) {
      if(item.id === post) {
        item.like = true;
      }
    }
  }

  doUnfollow(post: string){
    for (const item of this.events) {
      if(item.id === post) {
        item.like = false;
      }
    }
  }
}
