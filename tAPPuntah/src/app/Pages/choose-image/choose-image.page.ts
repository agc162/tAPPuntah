import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventoService } from 'src/app/Services/Event/evento.service';
import { Event } from 'src/app/Models/Event/event.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-choose-image',
  templateUrl: './choose-image.page.html',
  styleUrls: ['./choose-image.page.scss'],
})
export class ChooseImagePage {
  pathImg: string;
  idEvent: string;
  event: Event = null;
  events = [];

  constructor(public router: Router, public activedRoute: ActivatedRoute,
    private srvEvent: EventoService) {
    console.log('ruta: ' + router.url);
  }


  ionViewWillEnter() {
    this.activedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.idEvent = params.get('idEvento');
      }
    )
    this.srvEvent.getEvents().subscribe((datos: Event[]) => {
      for (const item of datos) {
        if(item.id == this.idEvent) {
          this.event = item;
          this.pathImg = this.event.image;
        }
      }
    });
  }

  public vistaEvento() {
    let nuevaRuta, addnew;
    let ruta = this.router.url;
    addnew = ruta.replace('/'+this.idEvent+'/','/new'+ this.idEvent+'/');
    nuevaRuta = addnew.replace('/chooseImage','');
    console.log('next url: '+ nuevaRuta);
    this.router.navigateByUrl(nuevaRuta);
  }
}