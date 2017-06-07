import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AuthService {
  token: string;
  message: string;
  message2: string;

  constructor (private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.message = 'Registration accepted';
        }
      )
      .catch(
      (error: any) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert ('The password is too weak');
      } else {
       // alert (errorMessage);
        swal(errorMessage);
    }
      console.log(error);
  }
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken().then(
          (token: string) => this.token = token
        );
      }
    )
      .catch(
        (error: any) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert ('Wrong password');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => {
        this.token = token;
      }
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
