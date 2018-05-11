import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ItalianCuisineViewModel } from '../../models/italian-cuisine-viewmodel';

@Injectable()
export class ItalianCuisineService {

  constructor() { }


  takeAllRecipes() {
    const recipes: ItalianCuisineViewModel[] = [
      {
        Id: 'bcbf832f-4143-4717-8720-b00cd6e8e859',
        Title: 'Italian Pesto',
        Description: 'A pesto recipe here...',
        Author: 'Chef1',
        ImgSrc: './assets/images/pesto.jpg'
      },
      {
        Id: 'e4445009-3ca3-40af-a0p7-abafc8727501',
        Title: 'Basil Pesto Pasta With Chicken',
        Description: 'A basil pesto pasta with chicken recipe here...',
        Author: 'Chef2',
        ImgSrc: './assets/images/pesto-pasta.jpg'
      },
      {
        Id: '6cd12f8e-9b8f-4c6a-9779-7b1des68qa71',
        Title: 'Gnocchi Napoletana',
        Description: 'A Gnocchi Napoletana recipe here...',
        Author: 'Chef3',
        ImgSrc: './assets/images/gnocchi-napoletana.jpg'
      }
    ];
    return recipes;
  }
}
