import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {ifTrue} from "codelyzer/util/function";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      alert('You need to Login');
    }
    return this.authService.isAuthenticated();
  }

}
