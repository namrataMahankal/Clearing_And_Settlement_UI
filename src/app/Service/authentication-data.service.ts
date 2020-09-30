import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {DBAccountReciever} from 'src/app/Components/Login/login.component';
import {LoginComponent} from 'src/app/Components/Login/login.component';
import {UserNameAndPassword} from 'src/app/Components/Login/login.component';
@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationDataService {

    baseUrl="http://localhost:8080/clearing-and-settlement/login";
    CM="Citi";
    constructor(private httpClient: HttpClient) { }
  
    getAuthenticationDetails(userNameAndPassword:UserNameAndPassword):Observable<DBAccountReciever>{
      
    return this.httpClient.post<DBAccountReciever>(this.baseUrl,userNameAndPassword).pipe(map(data => {
        if (data != null) {
          sessionStorage.setItem('username', userNameAndPassword.userName);
          //this.loggedAccount = data;
          console.log("Auth data");
          console.log(data);
          return data;
        }
      }
      ))
    }
  
    getTradesBySellerCM():Observable<any>{
      return this.httpClient.get<any>("http://localhost:8080/trades/clearing-member/"+this.CM+"/seller");
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