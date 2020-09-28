import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trade} from 'src/app/Components/ClearingHouse/clearinghouse.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl="http://localhost:8080/trades/allTrades";
  constructor(private httpClient: HttpClient) { }

  getAllTrades():Observable<any>{
    return this.httpClient.get<Trade[]>(`${this.baseUrl}`);
  }

  // getStr(){
  //   return this.httpClient.get("http://localhost:8080/sample");
  // }
}

