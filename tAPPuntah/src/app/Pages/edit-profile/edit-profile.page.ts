import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  edit: any;
  imagen:boolean = true;
  imagen2:boolean = false;
  imagenNoUser: boolean = false;
  

  constructor(private fb: FormBuilder, private router: Router) {
    this.edit = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      clave: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  doCambioImagen(){
    if(this.imagen == true){
      this.imagen = false;
      this.imagen2 = true;
      this.imagenNoUser = false;
    }
    else{
      this.imagen = true;
      this.imagen2 = false;
      this.imagenNoUser = false;
    }
  }

  doEliminarImagen(){
    this.imagen = false;
    this.imagen = false;
    this.imagenNoUser = true;
  }

  doEdit(){
    this.router.navigateByUrl('tAPPuntah/perfil');
  }

}
