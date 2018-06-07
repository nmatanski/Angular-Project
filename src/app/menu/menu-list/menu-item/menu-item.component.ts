import { Meal } from './../../meal.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() meal: Meal;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
