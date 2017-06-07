import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      swal('You need to Login');
    }
    return this.authService.isAuthenticated();
  }

}
