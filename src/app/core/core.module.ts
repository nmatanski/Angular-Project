import { MealService } from './../menu/meal.service';
import { DataStorageService } from './../shared/data-storage.service';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { FooterComponent } from './footer/footer.component';
// import { AuthService } from '../auth/auth.service';
// import { DataStorageService } from '../shared/data-storage.service';
// import { RecipeService } from '../recipes/recipe.service';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    DataStorageService,
    MealService,
    AuthService
    // ShoppingListService,
    // RecipeService,
    // DataStorageService,
    // AuthService
  ]
})
export class CoreModule { }
