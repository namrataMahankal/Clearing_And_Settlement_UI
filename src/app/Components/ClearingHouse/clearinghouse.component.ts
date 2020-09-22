import { Component } from '@angular/core';


@Component({
  selector: 'clearing-house',
  templateUrl: './clearinghouse.component.html',
 // styleUrls: ['./clearinghouse.component.css']
})



export class ClearingHouseComponent {
  title = 'Clearing-And-Settlement-UI';
  dataSourceCorpActions=CorpActions_list;
  displayedColumnsCorpActions: string[] = ['Securities','Actions','Initial fund balance','Initial share balance','Current fund balance','Current share balance'];
  dataSource = Trade_list;
  displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
  
  costOfSettlementValueList=CostOfSettlementValueList;
  displayedColumnCost=['CM','Cost'];
}


export interface TradeListElement {
    BuyerCM: string;
    SellerCM: string;
    ES: string;
    Qty: number;
    Price: number;
    TradeValue:number;
  }


  const Trade_list: TradeListElement[] = [
    {BuyerCM: "UBS", SellerCM: 'Wells Fargo', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
    {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
    {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
    {BuyerCM: "GS", SellerCM: 'Citi', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
  ];



export interface CorpActionsList {
    Securities: string;
    Action: string;
    Initial_fund_bal: number;
    Initial_share_bal: number;
    Current_fund_bal: number;
    Current_share_bal:number;
  }



const CorpActions_list: CorpActionsList[] = [
    {Securities: "Amazon", Action: 'Stock Split', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
    {Securities: "Apple", Action: 'Stock Dividend', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
    {Securities: "Google", Action: 'Rights', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
    {Securities: "Amazon", Action: 'Stock Split', Initial_fund_bal: 10000 ,Initial_share_bal: 1987,Current_fund_bal: 180000,Current_share_bal:2890},
];

export interface CostOfSettlementValue {
    CM: string;
    Cost:number;
  }

const CostOfSettlementValueList:CostOfSettlementValue[] =[{CM:"Citi",Cost:500},
{CM:"JP Morgan Chase",Cost:500},
{CM:"Credit Suisse",Cost:500},
{CM:"The Bank of New York Mellon Corporation",Cost:500}



]
