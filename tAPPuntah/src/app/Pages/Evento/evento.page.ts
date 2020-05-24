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

  constructor(
    private activedRoute: ActivatedRoute,
    private srvEvent: EventoService
  ) { }

  ionViewWillEnter() {
    // this.event = this.activedRoute.snapshot.paramMap.get('idEvent');
    this.activedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.idEvent = params.get('idEvento');
      }
    )

    // this.srvEvent.getEvents().subscribe((datos: any[]) => this.events = datos);
    // this.event = this.srvEvent.getEventsById(this.idEvent); // .subscribe((datos: Event) => this.event = datos);

    this.srvEvent.getEvents().subscribe((datos: Event[]) => {
      for (const item of datos) {
        if(item.id == this.idEvent) {
          this.event = item;
        }
      }
    });

  }

  ngOnInit() { }

}
