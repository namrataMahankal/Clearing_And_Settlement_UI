import { Component,OnInit } from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Service/authentication.service';
import { AuthenticationDataService } from '../../Service/authentication-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNamePassword:UserNameAndPassword=new UserNameAndPassword();
  //this.usernamePassword.userName;=username;
  //this.usernamePassword.password;=password;
  //username = 'javainuse'
  //password = '1234'
  invalidLogin = false
  
  constructor(private router: Router, private authenticationDataService: AuthenticationDataService  ,private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  /*checkLogin() {
    
    if (this.loginservice.authenticate(this.usernamePassword)) {
      //this.router.navigate(['admin']);
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
*/
  authenticate() {
    this.authenticationDataService.getAuthenticationDetails(this.userNamePassword).subscribe(data => {
      if (data == null){
        window.alert('Incorrect Username or Password!');
        this.invalidLogin = true;
        return false;
      }
      else if (data.type == 'ch') {
        //sessionStorage.setItem('username', this.userNamePassword.userName);
        window.alert('Welcome Clearing House');
        this.router.navigate(['clearing-house']);
        this.invalidLogin = false;
        return true;
      }
      else if (data.type == 'admin') {
        //sessionStorage.setItem('username', this.userNamePassword.userName);
        window.alert('Welcome Admin');
        this.router.navigate(['admin']);
        this.invalidLogin = false;
        return true;

      }

      else if (data.type == 'cm') {

        //sessionStorage.setItem('username', this.userNamePassword.userName);
        window.alert('Welcome Member');
        this.router.navigate(['clearing-member']);
        this.invalidLogin = false;
        return true;

      }
    

    })

  }
}




export class DBAccountReciever{
    constructor(){}
    clearingMemberId: Number;
    clearingMemberName: String; //"CitiGroup",
    userName: String;           //"citi",
    password: String;            //"citilogin",
    type: String;               //"cm"
}

export class UserNameAndPassword{
  
  userName:string;   //"citi";
  password:string;   //"citilogin"; 
  constructor (){ };
}