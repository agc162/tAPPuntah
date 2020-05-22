import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento;

  constructor(e: HomePage) {
   }

  ngOnInit() { }

}
