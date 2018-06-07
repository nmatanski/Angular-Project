import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { MenuComponent } from './menu/menu.component';
import { MealStartComponent } from './menu/meal-start/meal-start.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    // FooterComponent,
    // MenuComponent,
    // MealStartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AngularFireAuth
  ]
})
export class AppModule { }
