import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    // ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingCartModule {}

