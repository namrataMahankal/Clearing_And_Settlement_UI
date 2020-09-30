import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Newtrade } from '../newtrade';
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class NewTradeService {  
  
  private baseUrl = 'http://localhost:8080/clearing-and-settlement/trade/add';  
  
  constructor(private http:HttpClient) { }  

  createTrade(newtrade: Newtrade) {
    console.log("in create");
    console.log(newtrade);
    let httpHeaders=new HttpHeaders().set('allow-origin-access-control','*').set('Content-type','application/json;charset=utf-8');
    return this.http.post(this.baseUrl ,JSON.stringify(newtrade),{headers:httpHeaders});
    }
  
  // createTrade(newtrade: Newtrade): Observable<any> {  
  //   console.log("Enters Create Tarde");
  //   console.log(newtrade);
  //    return this.http.post(`${this.baseUrl}`, newtrade);  
  // }      
}  


