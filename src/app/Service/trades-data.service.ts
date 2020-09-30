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
  CM="Citi";
  constructor(private httpClient: HttpClient) { }

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

  getFundsObliged():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/fund-obligations/"+this.CM);
  }

  getOBShares():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/equity-obligations/"+this.CM);
  }
  getCorpActions():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/corporate-actions/cm/"+this.CM);
  }

  applyCorpActions():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/corporate-actions/apply");
  }

  getCostOfSettlementFunds():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+this.CM+"/cost-of-settlement/funds");
  }

  getCostOfSettlementShares():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+this.CM+"/cost-of-settlement/shares");
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

  getOpeningFundBalance():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+this.CM+"/opening-fund-balance");
  }

  getOpeningShareBalance():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/clearing-and-settlement/clearing-member/"+this.CM+"/opening-share-balance");
  }

  getTradesBySellerCM():Observable<any>{
    return this.httpClient.get<CMTrades[]>("http://localhost:8080/clearing-and-settlement/clearing-member/"+this.CM+"/seller");
  }

  getTradesByBuyerCM():Observable<any>{
    return this.httpClient.get<CMTrades[]>("http://localhost:8080/clearing-and-settlement/clearing-member/"+this.CM+"/buyer");
  }



  // getStr(){
  //   return this.httpClient.get("http://localhost:8080/sample");
  // }


}

