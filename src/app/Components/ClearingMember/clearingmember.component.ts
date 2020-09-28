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
  displayedColumns1: string[] = ['Securities','Opening_Balance','Closing_Balance', 'Shares_Obliged','Status'];
  displayedColumns2:string[]=['Securities','Shares','Price','Amount'];
  displayedColumnsProfile: string[] = ['Securities', 'Shares'];
  displayedColumnsCorpActions: string[] = ['Securities','Actions','Initial fund balance','Initial share balance','Current fund balance','Current share balance'];
  displayedColumnsSettlement: string[] = ['Securities', 'Shares', 'Rate', 'Cost'];
  dataSource = Trade_list;
  dataSource1= security_share_list;
  dataSourceCorpActions=CorpActions_list;
  dataSourceProfile=Profile_list;
  dataSettlement = SettlementList;
  dataSourceFunds=DayFundsChange;
  
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
  Opening_Balance:number;
  Closing_Balance:number;
  Shares_Obliged: number;
  Status: String;

}

export interface FundsElement{
  Securities: String;
  Shares :number;
  Price:number;
  Amount:number;
}

export interface ProfileElement {
  Securities: string;
  Shares:number;
  
}

export interface SettlementElement {
  Securities: String;
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

  {Securities:'Apple',Opening_Balance:10000,Closing_Balance:10000, Shares_Obliged: -6000,Status:"No Shortage"},
  {Securities:'Amazon',Opening_Balance:200,Closing_Balance:500, Shares_Obliged: -1000,Status:"Shortage"},


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

const DayFundsChange:FundsElement[]=[  
  {Securities: 'Amazon',Shares :200,Price:10, Amount:-2000},
  {Securities: 'Google',Shares :200,Price:10, Amount:-2000},
  {Securities: 'Apple',Shares :200,Price:10, Amount:-2000}

];


export class SlideToggleOverviewExample {}

export class ListOverviewExample {}