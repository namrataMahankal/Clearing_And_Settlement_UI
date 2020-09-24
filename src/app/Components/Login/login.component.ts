import { Component} from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
  })

export class LoginComponent {
title = 'Clearing-And-Settlement-UI';

newCredentials= new Credentials();
profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
     this.profileForm.reset();
}
checkCredentials(){
    this.newCredentials.username=this.profileForm.get('username').value;
    this.newCredentials.password=this.profileForm.get('password').value;
    this.profileForm.reset();
}
}
class Credentials {
    username: String;
    password: number;
}

