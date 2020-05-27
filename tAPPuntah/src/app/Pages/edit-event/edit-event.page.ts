import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventoService } from 'src/app/Services/Event/evento.service';
import { Event } from 'src/app/Models/Event/event.model';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage {

  idEvent: string;
  event: Event = null;
  events = [];
  eventos: Event[];

  nuevoTitulo;
  nuevaDescripcion;
  nuevaFecha;

  constructor(private formBuilder: FormBuilder, private route: Router,
    private activedRoute: ActivatedRoute, private srvEvent: EventoService) {
  }


  ionViewWillEnter() {
    this.activedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.idEvent = params.get('idEvento');
      }
    )
      console.log('id evento: ' + this.idEvent);
    this.srvEvent.getEvents().subscribe((datos: Event[]) => {
      this.eventos=datos;
      for (const item of datos) {
        if(item.id == this.idEvent) {
          this.event = item;
        }
      }
    });
  }

  editarEvento(){

      for (const item of this.eventos) {
        if(item.id == this.idEvent) {
          item.title = this.nuevoTitulo;
          item.dateEvent = this.nuevaFecha;
          item.description = this.nuevaDescripcion;
        }
      }
      this.srvEvent.postEvents(this.eventos).subscribe((datos: Event[]) => {
        this.eventos=datos;
        for (const item of datos) {
          if(item.id == this.idEvent) {
            console.log(item.title);
          }
        }
      });
  }

  ngOnInit() {} 


}
