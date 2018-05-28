import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meal } from '../meal.model';
import { Subscription } from 'rxjs/Subscription';
import { MealService } from '../meal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit, OnDestroy {

  menu: Meal[];
  subscription: Subscription;

  constructor(private mealService: MealService,
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.mealService.menuChanged
      .subscribe(
        (menu: Meal[]) => {
          this.menu = menu;
        }
      );
    this.menu = this.mealService.getMenu(); // showing a default data while recieving the data from the GET request
    this.dataStorageService.getMenuWithoutToken();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onNewMeal() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
