import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  follow: boolean = false;

  posts = [this.follow, this.follow, this.follow, this.follow, this.follow, this.follow, this.follow];

  constructor() { }

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
