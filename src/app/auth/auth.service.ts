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
          swal(
            'Registration accepted!',
            '',
            'success'
          );
          this.router.navigate(['/recipes']);
        }
      )
      .catch(
      (error: any) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        swal ('Oops...', 'The password is too weak', 'error');
      } else {
       // alert (errorMessage);
        swal('Oops...', errorMessage,  'error');
    }
      console.log(error);
  }
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        swal(
          'You are inside',
          '',
          'success'
        );
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
            swal ('Oops...', 'Wrong password', 'error');
          } else {
            swal('Oops...', errorMessage, 'error');
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
