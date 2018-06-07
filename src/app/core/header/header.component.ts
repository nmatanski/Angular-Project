import { Component, OnChanges } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnChanges {
  public loggedUser: String;

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) {
  }

  ngOnChanges() {
    this.loggedUser = sessionStorage.getItem('currentUser');
  }

  onSaveData() {
    this.dataStorageService.storeMenu()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getMenu();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
