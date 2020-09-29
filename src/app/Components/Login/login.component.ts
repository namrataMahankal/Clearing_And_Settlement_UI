// import { Component} from '@angular/core';
// import {  FormGroup,FormControl } from '@angular/forms';

// @Component({
//     selector: 'login',
//     templateUrl: './login.component.html'
//   })

// export class LoginComponent {
// title = 'Clearing-And-Settlement-UI';

// newCredentials= new Credentials();
// profileForm = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//   });


// onSubmit() {
//     console.warn(this.profileForm.value);
//      this.profileForm.reset();
// }
// checkCredentials(){
//     this.newCredentials.username=this.profileForm.get('username').value;
//     this.newCredentials.password=this.profileForm.get('password').value;
//     this.profileForm.reset();
// }
// }
// class Credentials {
//     username: String;
//     password: number;
// }

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "src/app/Service/login.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
  })
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.apiService.login(loginPayload).subscribe(data => {
      debugger;
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        this.router.navigate(['list-user']);
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
