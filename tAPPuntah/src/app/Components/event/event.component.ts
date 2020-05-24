import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {

  @Input()event: any;

  follow = false;
  posts = [this.follow, this.follow, this.follow, this.follow, this.follow, this.follow, this.follow];

  constructor() { }

  generateURL(idEvent) {
    return 'evento/' + idEvent;
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
