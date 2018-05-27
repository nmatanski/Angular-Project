import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// import { RecipeListComponent } from './recipe-list/recipe-list.component';
// import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
// import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';
import { MealStartComponent } from './meal-start/meal-start.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-list/menu-item/menu-item.component';

@NgModule({
  declarations: [
    MenuComponent,
    MealStartComponent,
    MealDetailComponent,
    MenuListComponent,
    MenuItemComponent,
    // RecipeListComponent,
    // RecipeEditComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }
