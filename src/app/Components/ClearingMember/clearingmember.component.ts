import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {TradesDataService} from 'src/app/Service/trades-data.service';
import { CostOfSettlementValue } from '../ClearingHouse/clearinghouse.component';
import { AuthenticationService } from '../../Service/authentication.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'clearing-member',
  templateUrl:  './clearingmember.component.html',
  styleUrls: ['./clearingmember.component.css']
})
export class ClearingMemberComponent implements OnInit{
  
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

 cm_logOut(){
  this.authService.logOut();
  window.alert('You are Logged Out');
 this.router.navigate([""]);
  }



 ngOnInit(){

  this.serv.getOpeningFundBalance().subscribe(
    data=>{
        this.openingFundBalance=data;
       
    }
); 

this.serv.getFundsObliged().subscribe(
  data=>{
      this.fundsObliged=data.fundObligation;
      
  }
);


this.serv.getOpeningShareBalance().subscribe(
  data=>{
      this.openingShares=data;
      
  }
); 

this.serv.getOBShares().subscribe(
data=>{
    this.obShares=data;
   
}
);

  this.serv.getTradesByBuyerCM().subscribe(
    data=>{
        this.buyTrades=data;
      
    }
); 
  this.serv.getTradesBySellerCM().subscribe(
      data=>{
          this.sellTrades=data;
         
      }
  ); 

  this.serv.getCostOfSettlementFunds().subscribe(
    data=>{
        this.costOfSettlementFunds=data;
    
    }
); 

this.serv.getCostOfSettlementShares().subscribe(
  data=>{
      this.dataSettlement=data;
   
  }
); 

this.serv.getCorpActions().subscribe(
data=>{
    this.corpActions=data.actionList;
    console.log(this.corpActions);
}
); 

 }
  constructor(private serv:TradesDataService,private cdr: ChangeDetectorRef,
    private router: Router,
    private authService: AuthenticationService){
//     this.serv.getOpeningFundBalance().subscribe(
//       data=>{
//           this.openingFundBalance=data;
         
//       }
//   ); 

//   this.serv.getFundsObliged().subscribe(
//     data=>{
//         this.fundsObliged=data.fundObligation;
        
//     }
//   );


//   this.serv.getOpeningShareBalance().subscribe(
//     data=>{
//         this.openingShares=data;
        
//     }
// ); 

// this.serv.getOBShares().subscribe(
//   data=>{
//       this.obShares=data;
     
//   }
// );

//     this.serv.getTradesByBuyerCM().subscribe(
//       data=>{
//           this.buyTrades=data;
        
//       }
//   ); 
//     this.serv.getTradesBySellerCM().subscribe(
//         data=>{
//             this.sellTrades=data;
           
//         }
//     ); 

//     this.serv.getCostOfSettlementFunds().subscribe(
//       data=>{
//           this.costOfSettlementFunds=data;
      
//       }
//   ); 

//   this.serv.getCostOfSettlementShares().subscribe(
//     data=>{
//         this.dataSettlement=data;
     
//     }
// ); 

// this.serv.getCorpActions().subscribe(
//   data=>{
//       this.corpActions=data.actionList;
//       console.log(this.corpActions);
//   }
// ); 

console.log("bbbbb");
console.log(this.openingFundBalance+this.fundsObliged);
}

  


costOfSettlementFunds:CostOfSettlement={
  fundsToBeBorrowed:0,
  borrowingRate:0,
  costIncurred:0
};

fundsObliged:number=0;
fundsToBeBorrowed:number;
costIncurred:number=0;
borrowingRate:number;
buyTrades:CMTrades[];
sellTrades:CMTrades[];
openingShares:OpeningShares[];
openingFundBalance:number;
sampleData:Array<any>;
  hiddenValue:Boolean=false;
  shortage:Boolean=true;
  obCnt=5;
  title = 'Clearing-And-Settlement-UI';
  displayedColumns: string[] = ['ES', 'Qty','Price','TradeValue'];
  displayedColumns1: string[] = ['Securities','Opening_Balance','Shares_Obliged','Status'];
  displayedColumns2: string[]=['Securities','Shares','Price', 'Amount'];
  displayedColumnsProfile: string[] = ['Securities', 'Shares'];
  displayedColumnsCorpActions: string[] = ['Securities','Actions','Parameter','Initial share balance','Corp Action effect','Current share balance'];
  displayedColumnsSettlement: string[] = ['Securities', 'Shares', 'Rate', 'Cost'];
  dataSource = Trade_list;
  dataSource1= security_share_list;
  dataSourceFunds=DayFundsChange;
  dataSourceCorpActions=CorpActions_list;
  dataSourceProfile=Profile_list;
  dataSettlement:SettlementElement[]=[];
  totalCost:number=0;
  sharesCost:number=0;
  corpActions:CorpActions[];
  obShares:OBShares[]=[];
  // dataSettlement : SettlementElement[] = [
  //   { Securities: 'Apple', Shares: 100, Rate: 5, Cost: 500 },
  //   { Securities: 'Amazon', Shares: 100, Rate: 1.23, Cost: 1234 },
  //   { Securities: 'Google', Shares: 100, Rate: 1.23, Cost: 1234 },
  //   { Securities: 'Amazon', Shares: 100, Rate: 1.23, Cost: 1234 },
  // ];

  getTotalCost() {
    //return this.dataSettlement.length;
     this.sharesCost=this.dataSettlement.map(t => t.cost).reduce((acc, value) => acc + value, 0);
     this.totalCost=this.sharesCost+this.costOfSettlementFunds.costIncurred;
     return this.sharesCost;
  }

  isLess(a:number,b:number)
  {
    if(a+b<0)
    {return "Shortage";}
    else
    {return "No shortage";}
  }
}

class CorpActions{
  securityName:string;
  initialShareBalance:number;
  finalShareBalance:number;
  action:string;
  parameter:string;
}

class OBShares{
  securityName:string;
  openingSharebalance:number;
  securityObligation:number;
}

class CostOfSettlement{
  fundsToBeBorrowed:number=0;
  borrowingRate:number=0;
  costIncurred:number=0;
}

class OpeningShares{
  es:string;
  sharesBalance:number;
}

export class CMTrades{
  es:string;
  price:number;
  qty:number;
  transactionAmt:number
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
  Opening_Balance:number;
  Closing_Balance:number;
  Shares_Obliged:number;
  Status:string;
}

export interface ProfileElement {
  Securities: string;
  Shares:number;
  
}

export class SettlementElement {
  securities: string;
  shares: number;
  pricePerShare: number;
  cost: number;
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
 {Securities:'Apple',Opening_Balance:10000,Closing_Balance:5000,Shares_Obliged:100,Status:'To be received'},
 {Securities:'Apple',Opening_Balance:10000,Closing_Balance:5000,Shares_Obliged:100,Status:'To be received'},
 {Securities:'Apple',Opening_Balance:10000,Closing_Balance:5000,Shares_Obliged:100,Status:'To be received'},
 {Securities:'Apple',Opening_Balance:10000,Closing_Balance:5000,Shares_Obliged:100,Status:'To be received'},
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