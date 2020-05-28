import {Comment} from 'src/app/Models/Comment/comment.model';

export interface Event extends Array<Comment> {
    id: string,
    title: string,
    user: string,
    datePublic: string,
    dateEvent: string,
    description: string,
    image: string,
    like: boolean;
    commments: Comment[]
}
