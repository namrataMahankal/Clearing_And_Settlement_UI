import { Component } from '@angular/core';



@Component({
  selector: 'clearing-member',
  templateUrl: './clearingmember.component.html',
 // styleUrls: ['./clearingmember.component.css']
})
export class ClearingMemberComponent {
  
  hiddenValue:Boolean=false;
  shortage:Boolean=true;
  obCnt=5;
  title = 'Clearing-And-Settlement-UI';
  displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
  displayedColumns1: string[] = ['Securities', 'Shares','Status'];
  displayedColumnsProfile: string[] = ['Securities', 'Shares'];
  displayedColumnsCorpActions: string[] = ['Securities','Actions','Initial fund balance','Initial share balance','Current fund balance','Current share balance'];
  dataSource = Trade_list;
  dataSource1= security_share_list;
  dataSourceCorpActions=CorpActions_list;
  dataSourceProfile=Profile_list;
}

export interface TradeListElement {
  BuyerCM: string;
  SellerCM: string;
  ES: string;
  Qty: number;
  Price: number;
  TradeValue:number;
}
export interface CorpActionsList {
    Securities: string;
    Action: string;
    Initial_fund_bal: number;
    Initial_share_bal: number;
    Current_fund_bal: number;
    Current_share_bal:number;
  }
  
export interface SecuritySharesListElement {
  Securities: string;
  Shares:number;
  Status:string;
}

export interface ProfileElement {
  Securities: string;
  Shares:number;
  
}


const Trade_list: TradeListElement[] = [
  {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
  {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
];



const CorpActions_list: CorpActionsList[] = [
    {Securities: "Amazon", Action: 'Stock Split', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
    {Securities: "Apple", Action: 'Stock Dividend', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
    {Securities: "Google", Action: 'Rights', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
    {Securities: "Amazon", Action: 'Stock Split', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
];

const security_share_list: SecuritySharesListElement[]=[
 {Securities:'Apple',Shares:100,Status:'To be received'},
 {Securities:'Amazon',Shares:300,Status:'To be sent'},
 {Securities:'Google',Shares:100,Status:'To be received'},
 {Securities:'Amazon',Shares:300,Status:'To be sent'},

];

const Profile_list: ProfileElement[] = [
  {Securities:'Apple',Shares:100},
  {Securities:'Amazon',Shares:300},
];

export class SlideToggleOverviewExample {}

export class ListOverviewExample {}