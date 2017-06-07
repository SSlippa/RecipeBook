import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
// import { default as swal } from 'sweetalert2';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      swal('Error');
    }
    return this.authService.isAuthenticated();
  }

}
