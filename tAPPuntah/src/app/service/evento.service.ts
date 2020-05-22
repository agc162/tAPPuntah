import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {
    console.log('Servicio evento en marcha...');
    this.http.get('./../../assets/data/events.json');
      // .subscribe(resp => {
      //   this.eventsJson = resp;
      //   console.log('Servicio \n' + this.eventsJson);
      // });
  }

  getEvents() {
    return this.http.get('./../../assets/data/events.json');
  }
}
