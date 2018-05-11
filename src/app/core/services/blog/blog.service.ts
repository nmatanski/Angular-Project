import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BlogViewModel } from '../../models/blog-view-model.module';

@Injectable()
export class BlogService {

  constructor() { }

  takeAllBlogs() {
    const heroes: BlogViewModel[] = [
      {
        Id: 'bcfacd2f-4143-4717-8720-b00cd6e8e859',
        Title: 'Eat wisely!',
        Description: 'Somethimes it\'s good idea to go to bed hungry',
        Author: 'Mr. Nice',
        ImgSrc: './assets/images/sleep-hungry.jpg'
      },
      {
        Id: 'e4445009-3ca3-40af-aa97-abafc8727501',
        Title: 'Why Americans are so fat?',
        Description: 'Eating burgers all the time is not the ultimate skinny problem solving...',
        Author: 'Narco',
        ImgSrc: './assets/images/americans.jpg'
      },
      {
        Id: '6cd12f8e-9b8f-4c6a-9779-7b1de49d7a71',
        Title: 'How to eat octopus',
        Description: 'You should be aware of this 5 simple steps to eat octopus....',
        Author: 'Chief Skull Master ',
        ImgSrc: './assets/images/octopus.jpg'
      },
    ];
    return heroes;
  }
}
