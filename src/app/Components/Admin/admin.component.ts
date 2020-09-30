import { Component, OnInit} from '@angular/core';
import {  FormGroup,FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { NewTradeService } from 'src/app/Service/newtrade.service';
import {Newtrade} from 'src/app/newtrade';
//import { TradeService } from '../trade.service';
@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
   // styleUrls: ['./admin.component.css']
  })

  export class AdminComponent  implements OnInit{
    title = 'Clearing-And-Settlement-UI';
    
    
    dataSourceCorpActions=CorpActions_list;              //1.For Corp Actions Table
    displayedColumnsCorpActions: string[] = ['CM','Initial_shares','Current_shares'];
                                                
    dataSource = Trade_list;                            //2.For trade Table
    displayedColumns: string[] = ['BuyerCM', 'SellerCM', 'ES', 'Qty','Price','TradeValue'];
                                                
    costOfSettlementValueList=CostOfSettlementValueList; //3.For Cost of settlement
    displayedColumnCost=['CM','Cost'];

    cm_list=Obligation_list_example;                     //4. For Obligation Report
    displayedColumnsObligReport=["CM","Funds ", "Securities"];


    constructor(private newtradeservice:NewTradeService) { }

  // newtrade : Newtrade=new Newtrade();
  newtrade:Newtrade;
  submitted = false;
  ngOnInit() {
    this.submitted=false;
  }
    // newTradeToDB= new newTrade();

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
          .subscribe();
        // this.newtrade = new Newtrade();
      }
      
      addTradeForm(){
        this.submitted=false;
        this.profileForm.reset();
      }
    // onSubmit() {
    //     // TODO: Use EventEmitter with form value
    //     console.warn(this.profileForm.value);
    //     this.profileForm.reset();
    // }
      // addTrade(){
        
      //   this.newTradeToDB.BuyerCM=this.profileForm.get('buyerCM').value;
      //   this.newTradeToDB.SellerCM=this.profileForm.get('sellerCM').value;
      //   this.newTradeToDB.ES=this.profileForm.get('ES').value;
      //   this.newTradeToDB.Qty=this.profileForm.get('Qty').value;
      //   this.newTradeToDB.Price=this.profileForm.get('Price').value;
      //   this.newTradeToDB.TradeValue=0;
      //   this.profileForm.reset();
        
      // }


  }

  
export interface TradeListElement {
    BuyerCM: string;
    SellerCM: string;
    ES: string;
    Qty: number;
    Price: number;
    TradeValue:number;
  }
// class newTrade {
//     BuyerCM: string;
//     SellerCM: string;
//     ES: string;
//     Qty: number;
//     Price: number;
//     TradeValue:number;
// }

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

  
  