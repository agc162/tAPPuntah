import { FormBuilder, FormGroup } from '@angular/forms';
import { Event } from 'src/app/Models/Event/event.model';
import { Comment } from './../../Models/Comment/comment.model';
import { EventoService } from 'src/app/Services/Event/evento.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage {

  idEvent: string;
  comments: Comment[] = [];
  title: string;
  date: string;
  image: string;
  cantComments: number;
  nuevoComent;

  constructor(
    private activedRoute: ActivatedRoute,
    private srvEvent: EventoService
  ) {
  }

  ionViewWillEnter() {
    this.activedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.idEvent = params.get('idEvento');
      }
    )
    console.log('[Comments] el id del evento es: ' + this.idEvent);


    this.srvEvent.getEvents().subscribe((datos: Event[]) => {
      for (const item of datos) {
        // tslint:disable-next-line: triple-equals
        if(item.id == this.idEvent) {
          this.comments = item.commments;
          this.cantComments = item.commments.length;
          this.title = item.title;
          this.image = item.image;
          this.date = item.dateEvent;
        }
      }
    });
  }

  mandarComentario() {

    console.log('Mandando comentario...'+ this.nuevoComent);
  }

}
