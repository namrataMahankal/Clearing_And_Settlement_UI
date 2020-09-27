import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl="http://localhost:8080/order";
  constructor(private httpClient: HttpClient) { }

  getData():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  getStr(){
    return this.httpClient.get("http://localhost:8080/sample");
  }
}

export interface Order {
  id:number;
  title:string;
  price: number;
  quamtity:number
}