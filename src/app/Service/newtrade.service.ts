import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Newtrade } from '../newtrade';
import { environment } from 'src/environments/environment';
@Injectable({  
  providedIn: 'root'  
})  
  
export class NewTradeService {  
  
  private baseUrl = environment.baseUrl+'/clearing-and-settlement/trade/add';  
  
  constructor(private http:HttpClient) { }  

  createTrade(newtrade: Newtrade) {
    console.log("in create");
    console.log(newtrade);
    let httpHeaders=new HttpHeaders().set('allow-origin-access-control','*').set('Content-type','application/json;charset=utf-8');
    return this.http.post<boolean>(this.baseUrl ,JSON.stringify(newtrade),{headers:httpHeaders});
    }
    returnCmListservice():Observable<any>{
      console.log("inNewtrade Service");
      return this.http.get<any>(environment.baseUrl+"/clearing-and-settlement/clearing-members");
    }

    returnSecuritiesListservice():Observable<any>{
      return this.http.get<any>(environment.baseUrl+"/clearing-and-settlement/securities");
    }
     
}  


