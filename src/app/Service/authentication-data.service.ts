import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import {map} from 'rxjs/operators';
import {DBAccountReciever} from 'src/app/Components/Login/login.component';
import {LoginComponent} from 'src/app/Components/Login/login.component';
import {UserNameAndPassword} from 'src/app/Components/Login/login.component';
// import {TradesDataService } from 'src/app/Service/trades-data.service';
//import {ClearingMemberComponent} from 'src/app/Components/ClearingMember/clearingmember.component';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationDataService {

   messageSubject=new Subject();
   dummy(){
     this.messageSubject.next('hello from service');
   }

    baseUrl=  environment.baseUrl + "/clearing-and-settlement/login";
    CM:string;
    clearM="";
    constructor(private httpClient: HttpClient) { }
  
    getAuthenticationDetails(userNameAndPassword:UserNameAndPassword):Observable<DBAccountReciever>{
      
    return this.httpClient.post<DBAccountReciever>(this.baseUrl,userNameAndPassword).pipe(map(data => {
        if (data != null) {
          sessionStorage.setItem('username', userNameAndPassword.userName);
          sessionStorage.setItem('clearingMemberName',data.clearingMemberName);
          this.CM=sessionStorage.getItem('clearingMemberName');
          console.log("when??");
          console.log(this.CM);
          //this.loggedAccount = data;
          console.log("Auth data");
          console.log(data);
          this.clearM=data.clearingMemberName;
          // this.tradeService.setCM(this.CM);
          console.log("setCM called");
          console.log(this.clearM);
          this.CM=data.clearingMemberName;
          console.log("In auth service: this.CM=>",this.CM);
          console.log("calling dummy");
          this.dummy();
          //this.cm.updateClearingMemberData();
          return data;
        }
      }
      ))
    }
  
    getCMName(){
      return sessionStorage.getItem('clearingMemberName');
    }
    getTradesBySellerCM():Observable<any>{
      return this.httpClient.get<any>(environment.baseUrl+"/trades/clearing-member/"+this.CM+"/seller");
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