import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  postId: number;
  currentPost: Post;
  studentList: Array<string>;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { 
    this.currentPost = JSON.parse(localStorage.getItem('currentPost'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')) {
        this.postId = Number.parseInt(params.get('id'));
        this.findStudentsOfCourse();
      }
    });
  }

  findStudentsOfCourse() {
    this.courseService.findStudentsOfCourse(this.postId).subscribe(data => {
      this.studentList = data;
    });
  }

}
