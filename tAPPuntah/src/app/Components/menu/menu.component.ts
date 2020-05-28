import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) {
   }

  ngOnInit() {}

  isEventPage(): boolean {
    let res;
    if(this.router.url.includes('tAPPuntah/evento') && this.router.url.includes('new')==false){
      res = true;
    }
    else{
      res = false;
    }
    return res;
  }

  public goEditPage() {
    //console.log('nextPage: ' + this.router.url + '/' + 'editEvent' );
    this.router.navigateByUrl(this.router.url + '/' + 'editEvent');

  }


}
