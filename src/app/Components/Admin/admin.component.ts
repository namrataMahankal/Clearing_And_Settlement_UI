import { Component} from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
//import { TradeService } from '../trade.service';
@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
   // styleUrls: ['./admin.component.css']
  })

  export class AdminComponent {
    title = 'Clearing-And-Settlement-UI';
    
    
    dataSourceCorpActions=CorpActions_list;              //1.For Corp Actions Table
    displayedColumnsCorpActions: string[] = ['Securities','Actions','Initial fund balance','Initial share balance','Current fund balance','Current share balance'];
                                                
    dataSource = Trade_list;                            //2.For trade Table
    displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
                                                
    costOfSettlementValueList=CostOfSettlementValueList; //3.For Cost of settlement
    displayedColumnCost=['CM','Cost'];

    cm_list=Obligation_list_example;                     //4. For Obligation Report
    displayedColumnsObligReport=["CM","Funds ", "Securities"];

    newTradeToDB= new newTrade();

    profileForm = new FormGroup({
        buyerCM: new FormControl(''),
        sellerCM: new FormControl(''),
        ES: new FormControl(''),
        Qty: new FormControl(''),
        Price: new FormControl(''),
    
      });
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
        
        this.profileForm.reset();
    }
      addTrade(){
        this.newTradeToDB.BuyerCM=this.profileForm.get('buyerCM').value;
        this.newTradeToDB.SellerCM=this.profileForm.get('sellerCM').value;
        this.newTradeToDB.ES=this.profileForm.get('ES').value;
        this.newTradeToDB.Qty=this.profileForm.get('Qty').value;
        this.newTradeToDB.Price=this.profileForm.get('Price').value;
        this.newTradeToDB.TradeValue=0;
        this.profileForm.reset();
        
      }






  }


  
export interface TradeListElement {
    BuyerCM: string;
    SellerCM: string;
    ES: string;
    Qty: number;
    Price: number;
    TradeValue:number;
  }
class newTrade implements TradeListElement{
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

  export interface SecuritySharesListElement {
    Securities: string;
    Shares:number;
  }
const security_share_list: SecuritySharesListElement[]=[
    {Securities:'Apple',Shares:100},
    {Securities:'Amazon',Shares:100},
   
];

   export interface Obligation_list{
    CM :String;
    Obliged_funds: Number;
    Obliged_securties:SecuritySharesListElement[];
}
const Obligation_list_example=[
    {CM:"Citi",Obliged_funds:45678,Obliged_securties:security_share_list},
    {CM:'UBS',Obliged_funds:45678,Obliged_securties:security_share_list},

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
    CM: String;
    Cost:number;
  }

const CostOfSettlementValueList:CostOfSettlementValue[] =[{CM:"Citi",Cost:500},
{CM:"JP Morgan Chase",Cost:500},
{CM:"Credit Suisse",Cost:500},
{CM:"The Bank of New York Mellon Corporation",Cost:500}
]


export class Admin_trade{
    BuyerCM: String;
    SellerCM: String;
    ES : String;
    Quantity: number;
    Price: number;
}

  
  