import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choose-image',
  templateUrl: './choose-image.page.html',
  styleUrls: ['./choose-image.page.scss'],
})
export class ChooseImagePage {
  constructor() {
  }

  public doLogin() {
    //this.router.navigateByUrl('tabs/cards');
    console.log('hola');
  }
}
