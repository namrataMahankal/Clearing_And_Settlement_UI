import { Component,OnInit } from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Service/authentication.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'javainuse'
  password = '1234'
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      //this.router.navigate(['admin']);
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}