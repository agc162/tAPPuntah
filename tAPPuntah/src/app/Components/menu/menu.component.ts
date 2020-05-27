import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) {
    console.log('path: ' + this.router.url);
   }

  ngOnInit() {}

  isEventPage(): boolean {
    return this.router.url.includes('eventos/evento');
  }

  public goEditPage() {
    this.router.navigateByUrl(this.router.url + '/' + 'editEvent');

  }


}
