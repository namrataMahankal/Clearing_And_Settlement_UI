import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {

  constructor(private router: Router) { }
  
  authenticate(username, password) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('username', username);
      window.alert('Welcome Admin');
      this.router.navigate(['admin']);

      return true;
    }
    else if (username === "clearinghouse" && password === "clearinghouse") {
      sessionStorage.setItem('username', username);
      window.alert('Welcome Clearing House');
      this.router.navigate(['clearing-house']);
    }

    else if (username === "someMember" && password === "someMember") {
      sessionStorage.setItem('username', username);
      window.alert('Welcome Member');
      this.router.navigate(['clearing-member']);
    }
    
    else {
      window.alert('Incorrect Username or Password!');
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}