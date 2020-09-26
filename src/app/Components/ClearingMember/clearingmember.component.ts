import { Component } from '@angular/core';



@Component({
  selector: 'clearing-member',
  templateUrl: './clearingmember.component.html',
  styleUrls: ['./clearingmember.component.css']
})
export class ClearingMemberComponent {
  
  hiddenValue:Boolean=false;
  shortage:Boolean=true;
  obCnt=5;
  title = 'Clearing-And-Settlement-UI';
  displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
  displayedColumns1: string[] = ['Securities','Initial_Quantity','Initial_Amt','Buy_Sell_Quantity','Buy_Sell_Amt','net_Quantity','net_Amt','borrow_rate_per_share']
  displayedColumnsProfile: string[] = ['Securities', 'Shares'];
  displayedColumnsCorpActions: string[] = ['Securities','Actions','Initial fund balance','Initial share balance','Current fund balance','Current share balance'];
  displayedColumnsSettlement: string[] = ['Securities', 'Shares', 'Rate', 'Cost'];
  dataSource = Trade_list;
  dataSource1= security_share_list;
  dataSourceCorpActions=CorpActions_list;
  dataSourceProfile=Profile_list;
  dataSettlement = SettlementList;
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
  Initial_Quantity: number;
  Initial_Amt : number;
  Buy_Sell_Quantity: number;
  Buy_Sell_Amt: number;
  net_Quantity: number;
  net_Amt : number;
  borrow_rate_per_share: number;

}

export interface ProfileElement {
  Securities: string;
  Shares:number;
  
}

export interface SettlementElement {
  Securities: string;
  Shares: number;
  Rate: number;
  Cost: number;
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
  {Securities:  'Apple', Initial_Quantity: 100,Initial_Amt :2000 , Buy_Sell_Quantity: -10,
  Buy_Sell_Amt: -200,net_Quantity: 90, net_Amt :1800 ,borrow_rate_per_share:1.5},
  {Securities:  'Amazon', Initial_Quantity: 150,Initial_Amt :3000 , Buy_Sell_Quantity: 15,
  Buy_Sell_Amt: 300,net_Quantity: 165, net_Amt :3300,borrow_rate_per_share:1.5 },
  {Securities:  'Google', Initial_Quantity: 100,Initial_Amt :2000 , Buy_Sell_Quantity: -10,
  Buy_Sell_Amt: -200,net_Quantity: 90, net_Amt :1800,borrow_rate_per_share:1.5 },
  {Securities:  'Intercontinental Exchange', Initial_Quantity: 10,Initial_Amt :2000 , Buy_Sell_Quantity: -15,
  Buy_Sell_Amt: -3000,net_Quantity: -5, net_Amt :-1000,borrow_rate_per_share:1.5 }  
];


const Profile_list: ProfileElement[] = [
  {Securities:'Apple',Shares:100},
  {Securities:'Amazon',Shares:300},
];

const SettlementList: SettlementElement[] = [
  { Securities: 'Apple', Shares: 100, Rate: 1.23, Cost: 1234 },
  { Securities: 'Amazon', Shares: 100, Rate: 1.23, Cost: 1234 },
  { Securities: 'Google', Shares: 100, Rate: 1.23, Cost: 1234 },
  { Securities: 'Amazon', Shares: 100, Rate: 1.23, Cost: 1234 },
];

export class SlideToggleOverviewExample {}

export class ListOverviewExample {}