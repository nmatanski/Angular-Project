import { Component, OnInit } from '@angular/core';
import { BlogViewModel } from '../core/models/blog-view-model.module';
import { BlogService } from '../core/services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: BlogViewModel[];

  constructor(private blogService: BlogService) {
    this.blogs = blogService.takeAllBlogs();
  }

  ngOnInit() {
  }

}
