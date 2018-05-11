import { Component, OnInit } from '@angular/core';
import { ItalianCuisineViewModel } from '../../core/models/italian-cuisine-viewmodel';
import { ItalianCuisineService } from '../../core/services/italian-cuisine/italian-cuisine.service';

@Component({
  selector: 'app-italian-cuisine',
  templateUrl: './italian-cuisine.component.html',
  styleUrls: ['./italian-cuisine.component.css']
})
export class ItalianCuisineComponent implements OnInit {

  italianRecipes: ItalianCuisineViewModel[];

  constructor(private italianCuisineService: ItalianCuisineService) {
    this.italianRecipes = italianCuisineService.takeAllRecipes();
  }

  ngOnInit() {
  }

}
