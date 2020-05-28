import { Router } from '@angular/router';
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


  newEvent: Event;
  constructor(public evnSrv: EventoService, public router: Router) {
     this.getMeEvents();
  }

  hayAdd(){
    let res:boolean;
    if(this.router.url.includes('Add')){
      res=true;
    }
    else{
      res=false;
    }
    return res;
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

  goCreateEvent(){
    this.router.navigateByUrl('evento/crearEvento')
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
