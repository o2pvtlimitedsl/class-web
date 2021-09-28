import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ResponseManagerService } from './response-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(private responseManagerService: ResponseManagerService) { }

  canActivate(): boolean {
    const authDataJSON = sessionStorage.getItem('auth_data');
    try {
      const authData = authDataJSON ? JSON.parse(authDataJSON) : null;
      if (authData && authData.accessToken) {
        return true;
      }
    } catch (error) {
      return false;
    }
    this.responseManagerService.showInfo('User need to login to access this feature', { hideTimer: true, });
    return true;
  }
}
