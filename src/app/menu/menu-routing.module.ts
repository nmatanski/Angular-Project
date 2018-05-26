import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
// import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { MenuComponent } from './menu.component';
import { MealStartComponent } from './meal-start/meal-start.component';

const menuRoutes: Routes = [
    {
        path: '', component: MenuComponent, children: [
            { path: '', component: MealStartComponent },
            // { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            // { path: ':id', component: RecipeDetailComponent },
            // { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(menuRoutes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})
export class MenuRoutingModule { }
