import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any;
  formulario:boolean = true;
  resultado:boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.login = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      clave: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  doLogin(){
    if(this.login.value.email == "gcs@ua.es" && this.login.value.clave == "123456"){
      this.router.navigateByUrl('/tAPPuntah');
    }
  }

}
