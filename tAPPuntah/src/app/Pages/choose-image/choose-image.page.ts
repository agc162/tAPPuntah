import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choose-image',
  templateUrl: './choose-image.page.html',
  styleUrls: ['./choose-image.page.scss'],
})
export class ChooseImagePage {
  pathImg: string;
  constructor(public router: Router) {
    console.log('ruta: ' + router.url);
  }

  ionViewWillEnter() {
   this.pathImg = 'leon.png'
  }
  public vistaEvento() {
    //console.log(p.replace('comments/', ''));
    let nuevaRuta;
    let ruta = this.router.url;
    nuevaRuta = ruta.replace('/editEvent/chooseImage','');
    this.router.navigateByUrl(nuevaRuta);
    console.log('nueva ruta: ' + nuevaRuta);
  }
}