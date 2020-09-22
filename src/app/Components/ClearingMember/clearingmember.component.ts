import { Component } from '@angular/core';


@Component({
  selector: 'clearing-member',
  templateUrl: './clearingmember.component.html',
 // styleUrls: ['./clearingmember.component.css']
})
export class ClearingMemberComponent {
  title = 'Clearing-And-Settlement-UI';
  displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
  displayedColumns1: string[] = ['Securities', 'Shares'];
  dataSource = Trade_list;
  dataSource1= security_share_list;
}

export interface TradeListElement {
  BuyerCM: string;
  SellerCM: string;
  ES: string;
  Qty: number;
  Price: number;
  TradeValue:number;
}

export interface SecuritySharesListElement {
  Securities: string;
  Shares:number;
}

const Trade_list: TradeListElement[] = [
  {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
  {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
];

const security_share_list: SecuritySharesListElement[]=[
 {Securities:'Apple',Shares:100},
 {Securities:'Amazon',Shares:100},

];

export class SlideToggleOverviewExample {}

export class ListOverviewExample {}