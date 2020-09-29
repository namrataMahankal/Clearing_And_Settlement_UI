import { Component } from '@angular/core';
import {TradesDataService} from 'src/app/Service/trades-data.service'
@Component({
  selector: 'clearing-house',
  templateUrl: './clearinghouse.component.html',

  styleUrls: ['./clearinghouse.component.css']

  // styleUrls: './clearinghouse.component.css'
})
export class ClearingHouseComponent {

   constructor(private serv:TradesDataService){
       console.log("In constr.......");
    this.serv.getAllTrades().subscribe(
        data=>{
            this.sampleData=data;
            console.log(this.sampleData);
        }
    ); 
   }
  title = 'Clearing-And-Settlement-UI';
  dataSourceCorpActions=CorpActions_list;
  displayedColumnsCorpActions: string[] = ['CM','Initial_shares','Current_shares'];
  dataSource = Trade_list;
  displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
  str;

//costOfSettlementValueList=CostOfSettlementValueList;
  

  panelOpenState = false;
  // obligation report panel
  obligationPanelData = ObligationPanelData;
  obPanelSharesColumns: string[] = [ 'Security', 'Opening Balance' ,'Closing Balance' ,'Net Quantity' ];
  obPanelFundsColumns: string[] = ['Security', 'Shares', 'Price', 'Balance'];

  // obligation matrix
  obligationMatrixEsData: ObligationMatrixEs[] = ObligationMatrixEsData;
  obligationMatrixEsColumns: string[] = [ 'ES', 'CM1', 'CM2', 'CM3' ];
  obligationMatrixFundsData: ObligationMatrixFunds[] = ObligationMatrixFundsData;
  obligationMatrixFundsColumns: string[] = ['CM', 'Net Fund'];

<<<<<<< HEAD

   cosPanelColumns:string[]=['Securities', 'Shares', 'Rate', 'Cost'];
   costOfSettlementPanelDataConst=CostOfSettlementPanelDataConst;


  sampleData:Array<any>;
   test(){
       console.log("in test");
    //    this.serv.getStr().subscribe(
    //        response=>this.printStm(response)
    //    );
    //   console.log("done");
       this.serv.getData().subscribe(
           data=>{
               this.sampleData=data;
               console.log(data);
           }
       );   
   }

   printStm(response){
    console.log(response);
   }
=======
  sampleData:Trade[];
  test(){}
//    test(){
//        console.log("in test");
//     //    this.serv.getStr().subscribe(
//     //        response=>this.printStm(response)
//     //    );
//     //   console.log("done");
//        this.serv.getData().subscribe(
//            data=>{
//                this.sampleData=data;
//                console.log(this.sampleData);
//            }
//        );   
//    }

//    printStm(response){
//     console.log(response);
//    }
>>>>>>> bd4ac5f53a6f91b16f261d6d1d8f8acdc54893b1
   
}

export interface TradeListElement {
    BuyerCM: string;
    SellerCM: string;
    ES: string;
    Qty: number;
    Price: number;
    TradeValue:number;
  }

export class Trade{
    buyerCM:string;
    es:string;
    price:number;
    qty:number;
    transactionAmt:number
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

<<<<<<< HEAD
export interface Obligation {
=======

export interface SharesObligation {
  Security: string;
  'Opening Balance': number;
  'Closing Balance': number;
  'Net Quantity': number; 
}
export interface FundsObligation {
>>>>>>> bd4ac5f53a6f91b16f261d6d1d8f8acdc54893b1
  Security: string;
  Shares: number;
  Price: number;
  Balance: number;
}

export interface ObligationReport {
  CM: string;
  Shares: SharesObligation[];
  Funds: FundsObligation[];
}




export interface SettlementElement {
  Securities: string;
  Shares: number;
  Rate: number;
  Cost: number;
}

export interface CostOfSettlementReport2{
  CM: string;
  Report:SettlementElement[];
}

const CostOfSettlementPanelDataConst: CostOfSettlementReport2[]=[
{CM:'Citi',Report:[{ Securities: 'Apple', Shares: 100, Rate: 1.23, Cost: 1234 },{ Securities: 'Apple', Shares: 100, Rate: 1.23, Cost: 1234 }]},
{CM:'The Bank of New York Mellon Corporation',Report:[{ Securities: 'Amazon', Shares: 	100, Rate: 1.23, Cost: 1234 },{ Securities: 'Apple', Shares: 100, Rate: 1.23, Cost: 1234 }]}

];




const ObligationPanelData: ObligationReport[] = [
    {CM: 'Citi', 
    Shares: [{ Security: 'Apple', 'Opening Balance': 100, 'Closing Balance': 100, 'Net Quantity': 100 }, 
    { Security: 'Apple', 'Opening Balance': 100, 'Closing Balance': 100, 'Net Quantity': 100 }],
    Funds: [{ Security: 'Apple', Shares: 900, Price: 100, Balance: 100 },
    { Security: 'Apple', Shares: 100, Price: 100, Balance: 100 }] },

    {CM: 'Citi',
    Shares: [{ Security: 'Apple', 'Opening Balance': 100, 'Closing Balance': 100, 'Net Quantity': 100 },
    { Security: 'Apple', 'Opening Balance': 100, 'Closing Balance': 100, 'Net Quantity': 100 }],
    Funds: [{ Security: 'Apple', 'Shares': 100, 'Price': 100, Balance: 100 },
    { Security: 'Apple', 'Shares': 100, 'Price': 100, Balance: 100 }] }
  ];

export interface ObligationMatrixEs {
  ES: string;
  CM1: number;
  CM2: number;
  CM3: number;
}

const ObligationMatrixEsData: ObligationMatrixEs[] = [
  { ES: 'ES1', CM1: 1700, CM2: -2500, CM3: 100 },
  { ES: 'ES2', CM1: 12000, CM2: 750, CM3: -1560 },
  { ES: 'ES3', CM1: -1500, CM2: 630, CM3: -930 }
];

export interface ObligationMatrixFunds {
  CM: string;
  'Net Fund': number;
}

const ObligationMatrixFundsData: ObligationMatrixFunds[] = [
  { CM: 'CM1', 'Net Fund': 15000 },
  { CM: 'CM2', 'Net Fund': -965000 },
  { CM: 'CM3', 'Net Fund': 258000 }
];

