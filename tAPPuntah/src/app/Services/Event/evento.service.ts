import { Comment } from './../../Models/Comment/comment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/Models/Event/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  events: Event[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio evento en marcha...');
  }

  getEvents() {
    return this.http.get('./../../assets/data/events.json');
  }
  postEvents(nuevoArray: Event[]){
    return this.http.post('./../../assets/data/events.json', nuevoArray);
  }

  getEventUser(user: string) : Event[] {
    this.getEvents().subscribe((datos: Event[]) => {
      this.events = datos.filter((dato: Event) => dato.user === user)
    });
    return this.events;
  }

}
