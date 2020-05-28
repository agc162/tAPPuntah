import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EventoService } from 'src/app/Services/Event/evento.service';
import { Event } from 'src/app/Models/Event/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {


  constructor(private route: Router,
    private activedRoute: ActivatedRoute, private srvEvent: EventoService) {
  }



  crearEvento(){
    this.route.navigateByUrl('tAPPuntah/perfilAdd');
  }


  ngOnInit() {} 


}
