import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // if (sessionStorage.getItem('currentUser') != null) {
    //   console.log(sessionStorage.getItem('currentUser'));
    //   return true;
    // }
    // else {
    //   this.router.navigate(['/fake']);
    //   console.log(sessionStorage.getItem('currentUser'));
    //   return false;
    // }

    return this.authService.isAuthenticated();
  }
}
