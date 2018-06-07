import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    let isOK = true;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          sessionStorage.setItem('currentUser', response.user['email']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        // error => console.log(error)
        // error => isOK = false
        error => alert('Wrong Credentials')
      );

      return isOK;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    sessionStorage.setItem('currentUser', null);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getEmailOfAuthenticatedUser() {
    if (this.token === null) {
      console.log('Token is null');
      return '!@#$%^&*^%$#@!$%^&*';
    }
    return firebase.auth().currentUser === null ? '!@#$%^&*^%$#@!$%^&*' : firebase.auth().currentUser.email;
  }
}
