import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class Post {
  id: number;
  username: string="";
  title: string="";
  text:string='';
  like: number;
  dateTime: string='';
  
}
