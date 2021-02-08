import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Post} from '../../models/post';
import {Transaction} from '../../models/transaction';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: Array<Post>;
  errorMessage: string;
  infoMessage: string;
  currentUser: User;

  constructor(private userService: UserService, private postService: CourseService, private router: Router) 
  {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit() {
    this.findAllCourses();
  }

  findAllCourses() {
    this.postService.findAllCourses().subscribe(data => {
      this.postList = data;
    });
  }

  enroll(post: Post) {
    if(!this.currentUser){
      this.errorMessage = "You should sign in to enroll a course";
      return;
    }
    var transaction = new Transaction();
    transaction.userId = this.currentUser.id;
    transaction.post = post;

    this.postService.enroll(transaction).subscribe(data => {
      this.infoMessage = "Mission is completed.";
    }, err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  detail(post: Post) {
    localStorage.setItem("currentCourse", JSON.stringify(post));
    this.router.navigate(['/detail', post.id]);
  }
}
