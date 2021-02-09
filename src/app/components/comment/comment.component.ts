import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {Post} from './post.component.ts';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})


export class Comment {
    id: number;
    post: Post;
    comment: string='';
    dateTime: string=''
     
}
