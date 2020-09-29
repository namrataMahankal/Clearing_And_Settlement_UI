import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trade} from 'src/app/Components/ClearingHouse/clearinghouse.component';
import {CMTrades} from 'src/app/Components/Clearingmember/clearingmember.component';


@Injectable({
  providedIn: 'root'
})
export class TradesDataService {

  baseUrl="http://localhost:8080/trades/allTrades";
  CM="Citi";
  constructor(private httpClient: HttpClient) { }

  getAllTrades():Observable<any>{
    return this.httpClient.get<Trade[]>(`${this.baseUrl}`);
  }

  getTradesBySellerCM():Observable<any>{
    return this.httpClient.get<CMTrades[]>("http://localhost:8080/trades/clearing-member/"+this.CM+"/seller");
  }

  // getStr(){
  //   return this.httpClient.get("http://localhost:8080/sample");
  // }
}

