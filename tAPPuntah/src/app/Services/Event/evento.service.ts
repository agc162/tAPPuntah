import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/Models/Event/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventEnc : Event ;

  constructor(private http: HttpClient) {
    console.log('Servicio evento en marcha...');
  }

  getEvents() {
    // console.log('[Servicio] Enviando todos los eventos');
    return this.http.get('./../../assets/data/events.json');
  }

  getEventsById(eventId): Event {

    this.getEvents().subscribe((datos: Event[]) => {
      for(const event of datos) {
        if (event.id == eventId) {
          console.log('[Servicio] Enviando el evento con id ' + eventId);
          this.eventEnc = event;
          return this.eventEnc;
        }
      }
    });
    return this.eventEnc;
  }
}
