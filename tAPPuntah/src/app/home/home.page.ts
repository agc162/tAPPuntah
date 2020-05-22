import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/service/evento.service';
import { EventoPage } from 'src/app/evento/evento.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  follow = false;
  posts = [this.follow, this.follow, this.follow, this.follow, this.follow, this.follow, this.follow];
  events;

  constructor(public evnSrv: EventoService) {
    this.getAllEvents();
  }

  getAllEvents() {
    this.evnSrv.getEvents().subscribe(res => this.events = res);
  }

  showEvent(item) {

  }

  ngOnInit() {
  }

  doFollow(post: number){
    if(!this.posts[post]){
      this.posts[post]=true;
    }
  }

  doUnfollow(post: number){
    if(this.posts[post]){
      this.posts[post]=false;
    }
  }
}
