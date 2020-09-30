import { Component, OnInit, ViewChild} from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { NewTradeService } from 'src/app/Service/newtrade.service';
import {Newtrade} from 'src/app/newtrade';
//import { TradeService } from '../trade.service';
import {Trade} from 'src/app/Components/ClearingHouse/clearinghouse.component';
import {TradesDataService} from 'src/app/Service/trades-data.service';


@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
  })

  export class AdminComponent  implements OnInit{
    constructor(private serv:TradesDataService,private newtradeservice:NewTradeService){
      console.log("In constr of admincomponent");
   this.serv.getAllTrades().subscribe(
       data=>{
           this.TradesDataSource=data;
       }
   );
   
  }

    title = 'Clearing-And-Settlement-UI';
    CMDataSource: string[];
    SecuritiesDataSource: string[];
    TradesDataSource:Trade[];
    clickGenerateTrade:boolean=false;
    clickSettleUp:boolean=false;
    clickCorpAction:boolean=false;
    
    
    generateTrades(){
      this.clickGenerateTrade=!this.clickGenerateTrade;
    this.serv.generateTradesServ().subscribe(
        data=>{
            this.TradesDataSource=data;
            console.log("trades generated");
            console.log(this.TradesDataSource);
        }
    ); 

 
  }
    applyCorpActions(){
      this.clickCorpAction=!this.clickCorpAction;
      this.serv.applyCorpActions().subscribe(
        data=>{
            console.log("apply corp actions");
        }
    ); 
    }

    settleUp(){
        this.clickSettleUp=!this.clickSettleUp;
        this.serv.settleUpService().subscribe(
          data=>{
              console.log("settle up stuff");
          }
      );  
    }
    
    dataSourceCorpActions=CorpActions_list;              //1.For Corp Actions Table
    displayedColumnsCorpActions: string[] = ['CM','Initial_shares','Current_shares'];
                                                
    dataSource = Trade_list;                            //2.For trade Table
    displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
                                                
    costOfSettlementValueList=CostOfSettlementValueList; //3.For Cost of settlement
    displayedColumnCost=['CM','Cost'];

    cm_list=Obligation_list_example;                     //4. For Obligation Report
    displayedColumnsObligReport=["CM","Funds ", "Securities"];


  newtrade:Newtrade;
  submitted = false;
  ngOnInit() {
    this.submitted=false;
    this.newtradeservice.returnCmListservice().subscribe(
      data=>{
          this.CMDataSource=data;
          console.log("-------");
          console.log(this.CMDataSource);
      }
  );
   this.newtradeservice.returnSecuritiesListservice().subscribe(
    data=>{
        this.SecuritiesDataSource=data;
    }
);
  }


    profileForm = new FormGroup({
        BuyerCM: new FormControl(''),
        SellerCM: new FormControl(''),
        ES: new FormControl(''),
        Qty: new FormControl(''),
        Price: new FormControl(''),

      });

      savetrade(savetrade){
        this.newtrade=new Newtrade();   
        this.newtrade.buyerCM=this.profileForm.get('BuyerCM').value;
        this.newtrade.sellerCM=this.profileForm.get('SellerCM').value;
        this.newtrade.eS=this.profileForm.get('ES').value;
        this.newtrade.qty=this.profileForm.get('Qty').value;
        this.newtrade.price=this.profileForm.get('Price').value;
        this.newtrade.transactionAmt=null;
        this.submitted = true;
        this.save();
        this.addTradeForm();
        
        //create toast
      }

      save() {
        this.newtradeservice.createTrade(this.newtrade)
          .subscribe(
            data_newtrade =>{
              this.serv.getAllTrades().subscribe(
                data=>{
                  this.TradesDataSource=data;
              }
              );
            }
          );
      }

      returnCmList(){  
      this.newtradeservice.returnCmListservice().subscribe(
          data=>{
              this.CMDataSource=data;
          }
      ); 
      
    }
      addTradeForm(){
        this.submitted=false;
        this.profileForm.reset();
      }
}


const Trade_list: TradeListElement[] = [
    {BuyerCM: "UBS", SellerCM: 'Wells Fargo', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
    {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
    {BuyerCM: "Citi", SellerCM: 'GS', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
    {BuyerCM: "GS", SellerCM: 'Citi', ES: 'Apple', Qty: 100,Price: 12,TradeValue:100 },
  ];


const security_share_list: SecuritySharesListElement[]=[
    {Securities:'Apple',Shares:100},
    {Securities:'Amazon',Shares:100},
   
];


const Obligation_list_example=[
    {CM:"Citi",Obliged_funds:45678,Obliged_securties:security_share_list},
    {CM:'UBS',Obliged_funds:45678,Obliged_securties:security_share_list},

];


const CorpActions_list: CorpActionsList[] = [
  {Securities: "Amazon", Action: 'Stock Split',Ratio: '1:3', CM_List:[{CM:'GS',Initial_shares: 1987,Current_shares:2890}] },
  {Securities: "Apple", Action: 'Stock Dividend',  Ratio: '1:3', CM_List:[{CM:'Citi',Initial_shares: 1987,Current_shares:2890}]},
  
];

const CostOfSettlementValueList:CostOfSettlementValue[] =[{CM:"Citi",Cost:500},
{CM:"JP Morgan Chase",Cost:500},
{CM:"Credit Suisse",Cost:500},
{CM:"The Bank of New York Mellon Corporation",Cost:500}
]


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

export class Admin_trade{
    BuyerCM: String;
    SellerCM: String;
    ES : String;
    Quantity: number;
    Price: number;
}

export interface Obligation_list{
  CM :String;
  Obliged_funds: Number;
  Obliged_securties:SecuritySharesListElement[];
}

export interface CostOfSettlementValue {
  CM: String;
  Cost:number;
}
