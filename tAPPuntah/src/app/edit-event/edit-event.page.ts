import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage {

  loginForm = this.formBuilder.group({
    titulo: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    descripcion:  ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  public doLogin() {
    //this.router.navigateByUrl('tabs/cards');
    console.log('hola');
  }


}
