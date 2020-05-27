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
        console.log('[Evento] ' + item.user)
        if(item.user === '@Mel') {
          console.log('[ffEvento] ' + item.user)
          this.events.push(item);
        }
      }
    });
  }


  // Event

  follow = false;
  posts = [this.follow, this.follow, this.follow, this.follow, this.follow, this.follow, this.follow];

  generateURL(idEvent) {
    return 'tAPPuntah/evento/' + idEvent;
  }

  generateURLComment(idEvent) {
    return 'tAPPuntah/evento/' + idEvent + '/comments';
  }

  doFollow(post: number){
    if(!this.posts[post]){
      this.posts[post]=true;
    }
  }

  doUnfollow(post: number){
    if(this.posts[post]){
      this.posts[post]=false;
    }
  }

}
