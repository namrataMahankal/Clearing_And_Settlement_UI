import { Component } from '@angular/core';



@Component({
  selector: 'clearing-member',
  templateUrl:  './clearingmember.component.html',
  styleUrls: ['./clearingmember.component.css']
})
export class ClearingMemberComponent {
  
  hiddenValue:Boolean=false;
  shortage:Boolean=true;
  obCnt=5;
  title = 'Clearing-And-Settlement-UI';
  displayedColumns: string[] = ['ES', 'Qty','Price','TradeValue'];
  displayedColumns1: string[] = ['Securities','Opening_Balance','Closing_Balance','Shares_Obliged','Status'];
  displayedColumns2: string[]=['Securities','Shares','Price', 'Amount'];
  displayedColumnsProfile: string[] = ['Securities', 'Shares'];
  displayedColumnsCorpActions: string[] = ['Securities','Actions','Parameter','Initial share balance','Corp Action effect','Current share balance'];
  displayedColumnsSettlement: string[] = ['Securities', 'Shares', 'Rate', 'Cost'];
  dataSource = Trade_list;
  dataSource1= security_share_list;
  dataSourceFunds=DayFundsChange;
  dataSourceCorpActions=CorpActions_list;
  dataSourceProfile=Profile_list;
  dataSettlement : SettlementElement[] = [
    { Securities: 'Apple', Shares: 100, Rate: 1.23, Cost: 1234 },
    { Securities: 'Amazon', Shares: 100, Rate: 1.23, Cost: 1234 },
    { Securities: 'Google', Shares: 100, Rate: 1.23, Cost: 1234 },
    { Securities: 'Amazon', Shares: 100, Rate: 1.23, Cost: 1234 },
  ];

  getTotalCost() {
    return this.dataSettlement.map(t => t.Cost).reduce((acc, value) => acc + value, 0);
  }
}

export interface TradeListElement {
  ES: string;
  Qty: number;
  Price: number;
  TradeValue:number;
}
export interface CorpActionsList {
    Securities: string;
    Action: string;
    Parameter:string;
    Initial_share_bal: number;
   
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

export interface SettlementElement {
  Securities: string;
  Shares: number;
  Rate: number;
  Cost: number;
}

export interface FundsElement {
  Securities: String;
  Shares: number;
  Price: number;
  Amount: number;
}

const Trade_list: TradeListElement[] = [
  { ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
  { ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
];



const CorpActions_list: CorpActionsList[] = [
    {Securities: "Amazon", Action: 'Stock Split', Parameter:'1:3',Initial_share_bal: 1987,Current_share_bal:2890},
    {Securities: "Apple", Action: 'Stock Dividend', Parameter:'5%',Initial_share_bal: 1987,Current_share_bal:2890},
    {Securities: "Google", Action: 'Reverse split', Parameter:'4:1',Initial_share_bal: 1987,Current_share_bal:2890},
    {Securities: "Amazon", Action: 'Stock Split',Parameter:'1:3',Initial_share_bal: 1987,Current_share_bal:2890},
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

const DayFundsChange: FundsElement[] = [
  { Securities: 'Amazon', Shares: 200, Price: 10, Amount: -2000 },
  { Securities: 'Google', Shares: 200, Price: 10, Amount: -2000 },
  { Securities: 'Apple', Shares: 200, Price: 10, Amount: -2000 }
];


export class SlideToggleOverviewExample {}

export class ListOverviewExample {}