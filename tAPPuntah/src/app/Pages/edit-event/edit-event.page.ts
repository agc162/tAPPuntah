import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventoService } from 'src/app/Services/Event/evento.service';
import { Event } from 'src/app/Models/Event/event.model';
import { identifierModuleUrl } from '@angular/compiler';


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
  editado: Boolean = false;
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
    if(this.idEvent.includes('new')){
      this.editado=true;
      this.idEvent=this.idEvent.replace('new','');
    }
    this.srvEvent.getEvents().subscribe((datos: Event[]) => {
      this.eventos=datos;
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

  editarEvento(){
    let nuevaRuta;
    if(this.editado==true){
      nuevaRuta = 'tAPPuntah/evento/new'+this.idEvent;
    }
    else{
      nuevaRuta = 'tAPPuntah/evento/'+this.idEvent;
    }
    this.route.navigateByUrl(nuevaRuta);
  }


  public goToChooseImage() {
    this.route.navigateByUrl(this.route.url + '/' + 'chooseImage');

  }
  ngOnInit() {} 


}
