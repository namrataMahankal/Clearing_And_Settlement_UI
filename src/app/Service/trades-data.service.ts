import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trade} from 'src/app/Components/ClearingHouse/clearinghouse.component';
import {CMTrades} from 'src/app/Components/Clearingmember/clearingmember.component';


@Injectable({
  providedIn: 'root'
})
export class TradesDataService {

  baseUrl="http://localhost:8080/clearing-and-settlement/trade";
  CM="";
  constructor(private httpClient: HttpClient) { }

  setCM(clearM:string){
    this.CM=clearM;
    console.log("this.CM=",this.CM);
  }


  getObMatrix():Observable<any>{
    console.log("In ...");
    console.log(this.CM);
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-house/equity-obligations");
  }


  getOBMatrixFunds():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-house/fund-obligations");
  }

  getCostOfSettlement():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/cost-of-settlement");
  }


  getCorpActionsSummary():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/corporate-actions/clearing-house/summary");
  }

  getOBReport():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-house/obligation-report");
  }

  getFundsObliged(cmname):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/fund-obligations/"+cmname);
  }

  getOBShares(cmname):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/equity-obligations/"+cmname);
  }
  getCorpActions(cmname):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/corporate-actions/cm/"+cmname);
  }

  applyCorpActions():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/corporate-actions/apply");
  }

  getCostOfSettlementFunds(cmname):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+cmname+"/cost-of-settlement/funds");
  }

  getCostOfSettlementShares(cmname):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+cmname+"/cost-of-settlement/shares");
  }

  generateTradesServ():Observable<any>{
    return this.httpClient.get<Trade[]>("http://localhost:8080/clearing-and-settlement/trade/generate");
  }

  settleUpService():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/trade/settle");
  }

  getAllTrades():Observable<any>{
    return this.httpClient.get<Trade[]>(`${this.baseUrl}`);
  }

  getOpeningFundBalance(cmname:string):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+cmname+"/opening-fund-balance");
  }

  getOpeningShareBalance(cmname):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+cmname+"/opening-share-balance");
  }

  getTradesBySellerCM(cmname):Observable<any>{
    return this.httpClient.get<CMTrades[]>("http://localhost:8080/clearing-and-settlement/clearing-member/"+cmname+"/seller");
  }

  getTradesByBuyerCM(cmname):Observable<any>{
    return this.httpClient.get<CMTrades[]>("http://localhost:8080/clearing-and-settlement/clearing-member/"+cmname+"/buyer");
  }



  // getStr(){
  //   return this.httpClient.get("http://localhost:8080/sample");
  // }


}

