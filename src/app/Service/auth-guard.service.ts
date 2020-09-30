import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      {
      return true;
    }
      else{
        window.alert('Please Login First');
        this.router.navigate(['login']);
      return false;
      }
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdServiceCH implements CanActivate{
  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserCH())
      {
      return true;
    }
      else{
        window.alert('Sorry! You are not Clearing House');
        this.router.navigate(['login']);
      return false;
      }
    }
  }
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGaurdServiceCM implements CanActivate{
    constructor(private router: Router,
      private authService: AuthenticationService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.isUserCM())
        {
        return true;
      }
        else{
          window.alert('Sorry! You are not a Clearing Member');
          this.router.navigate(['login']);
        return false;
        }
      }
    }

    @Injectable({
      providedIn: 'root'
    })
    export class AuthGaurdServiceAdmin implements CanActivate{
      constructor(private router: Router,
        private authService: AuthenticationService) { }
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserAdmin())
          {
          return true;
        }
          else{
            window.alert('Sorry! You are not an Admin');
            this.router.navigate(['login']);
          return false;
          }
        }
      }