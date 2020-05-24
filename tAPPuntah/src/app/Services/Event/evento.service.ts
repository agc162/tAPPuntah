import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {
    console.log('Servicio evento en marcha...');
  }

  getEvents() {
    return this.http.get('./../../assets/data/events.json');
  }
}
