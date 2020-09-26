import { Component } from '@angular/core';

@Component({
  selector: 'clearing-house',
  templateUrl: './clearinghouse.component.html',

  styleUrls: ['./clearinghouse.component.css']

  // styleUrls: './clearinghouse.component.css'
})
export class ClearingHouseComponent {

   
  title = 'Clearing-And-Settlement-UI';
  dataSourceCorpActions=CorpActions_list;
  displayedColumnsCorpActions: string[] = ['CM','Initial_shares','Current_shares'];
  dataSource = Trade_list;
  displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
  
  costOfSettlementValueList=CostOfSettlementValueList;
  displayedColumnCost=['CM','Cost'];

  // obligation report panel
  obligationPanelData = ObligationPanelData;
  obPanelColumns: string[] = ['Security', 'Balance']
  panelOpenState = false; 


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
    Ratio: string;
    CM_List: CM_List[];
  }
  export interface CM_List {
    CM:string;
    Initial_shares: number;
    Current_shares:number;
  }


const CorpActions_list: CorpActionsList[] = [
    {Securities: "Amazon", Action: 'Stock Split',Ratio: '1:3', CM_List:[{CM:'GS',Initial_shares: 1987,Current_shares:2890}] },
    {Securities: "Apple", Action: 'Stock Dividend',  Ratio: '1:3', CM_List:[{CM:'Citi',Initial_shares: 1987,Current_shares:2890}]},
    
];

export interface CostOfSettlementValue {
    CM: string;
    Cost:number;
  }

const CostOfSettlementValueList:CostOfSettlementValue[] =[{CM:"Citi",Cost:500},
{CM:"JP Morgan Chase",Cost:500},
{CM:"Credit Suisse",Cost:500},
{CM:"The Bank of New York Mellon Corporation",Cost:500}]


export interface Obligation {
  Security: string;
  Balance: number;
}
export interface ObligationReport {
  CM: string;
  Report: Obligation[];
  NetBalance: number;
}

const ObligationPanelData: ObligationReport[] = [
  { CM: 'Citi', Report: [{ Security: 'Apple', Balance: 100 }, { Security: 'Amazon', Balance: -200 }], NetBalance: -100 },
  { CM: 'JPMC', Report: [{ Security: 'Apple', Balance: -150 }, { Security: 'Amazon', Balance: 300 }], NetBalance: 150 }
];
