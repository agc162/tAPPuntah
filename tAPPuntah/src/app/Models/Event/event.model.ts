import {Comment} from 'src/app/Models/Comment/comment.model';

export interface Event extends Array<Comment> {
    id: string,
    title: string,
    datePublic: string,
    dateEvent: string,
    description: string,
    image: string,
    commments: Comment[]
}
