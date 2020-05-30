import { EventoService } from 'src/app/Services/Event/evento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Event } from 'src/app/Models/Event/event.model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  idEvent: string;
  event: Event = null;
  events = [];
  editado: Boolean = false;

  constructor(
    private activedRoute: ActivatedRoute,
    private srvEvent: EventoService
  ) { }

  ionViewWillEnter() {
    this.activedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.idEvent = params.get('idEvento');
      }
    )
    if(this.idEvent.includes('new')){
      this.editado=true;
      this.idEvent=this.idEvent.replace('new','');
    }
    this.srvEvent.getEvents().subscribe((datos: Event[]) => {
      for (const item of datos) {
        if(item.id == this.idEvent) {
          this.event = item;
          if(this.editado == true){
            this.event.image='2'+this.event.image;
          }
        }
      }
    });

  }

  ngOnInit() { }

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
