import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationDataService } from './authentication-data.service';
import { LoginComponent } from 'src/app/Components/Login/login.component';
import { UserNameAndPassword } from 'src/app/Components/Login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private authenticationDataService: AuthenticationDataService) { }

  cmname:string;
  public authenticate(userNameAndPassword: UserNameAndPassword) {
    this.authenticationDataService.getAuthenticationDetails(userNameAndPassword).subscribe(data => {
      if (data != null) {
        sessionStorage.setItem('username', userNameAndPassword.userName);
        sessionStorage.setItem('type',data.type);
        sessionStorage.setItem('clearingMemberName',data.clearingMemberName);
        this.cmname=sessionStorage.getItem('clearingMemberName');
        console.log("when??");
        console.log(this.cmname);
        //this.loggedAccount = data;
        return data;
      }
    }
    )


  }

  


  /*if (username === "admin" && password === "admin") {
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
  }*/


isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return !(user === null)
}

isUserCM(){
  let type=sessionStorage.getItem('type')
  console.log("CM type detected")
  return (sessionStorage.getItem('type')=="cm")
}
isUserCH(){
  let type=sessionStorage.getItem('type')
  console.log("CH type detected")
  return (sessionStorage.getItem('type')=="ch")
}
isUserAdmin(){
  let type=sessionStorage.getItem('type')
  console.log("Admin type detected")
  return (sessionStorage.getItem('type')=="admin")
}

logOut() {
  sessionStorage.removeItem('username')
}
}