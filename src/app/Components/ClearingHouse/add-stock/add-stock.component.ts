import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewTradeService } from 'src/app/Service/newtrade.service';
import { Newtrade } from 'src/app/newtrade';
import {  FormGroup,FormControl, Validators } from '@angular/forms';
import { Trade } from '../clearinghouse.component';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  success: boolean = false;
  error: boolean = false;
  profileForm = new FormGroup({
    BuyerCM: new FormControl('',Validators.required),
    SellerCM: new FormControl('',Validators.required),
    ES: new FormControl('',Validators.required),
    Qty: new FormControl('',Validators.compose([Validators.required,Validators.min(1)])),
    Price: new FormControl('',Validators.compose([Validators.required,Validators.min(1)])),

  });
  newtrade: Newtrade = new Newtrade()
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private newTradeService: NewTradeService,
    public dialogRef: MatDialogRef<AddStockComponent>,
    private dialog: MatDialog) {
      dialogRef.disableClose = true;
     }

  ngOnInit() {
  }
  onSave() {
    console.log(this.data.clearingMembers)
    this.newtrade.qty = this.profileForm.get("Qty").value
    this.newtrade.buyerCM = this.profileForm.get("BuyerCM").value
    this.newtrade.eS = this.profileForm.get("ES").value
    this.newtrade.price= this.profileForm.get("Price").value
    this.newtrade.sellerCM = this.profileForm.get("SellerCM").value
    this.newtrade.transactionAmt = this.newtrade.qty*this.newtrade.price

    this.newTradeService.createTrade(this.newtrade).subscribe(
      data => {
        if (data) {
          this.success = true;
          this.fadeOutSuccess();
          this.profileForm.reset();
          this.newtrade=new Newtrade();
        }
        else {
          this.error = true;
          this.fadeOutError();
        }
      }
    )
  }
  fadeOutSuccess() {
    setTimeout(() => {
      this.success = false;
    }, 2000);
  }
  fadeOutError() {
    setTimeout(() => {
      this.error = false;
    }, 2000);
  }

  calculateTransactionAmount() {
    if (this.profileForm.get("Price").valid && this.profileForm.get("Qty").valid)
      this.newtrade.transactionAmt = this.profileForm.get("Price").value * this.profileForm.get("Qty").value
  }

  onClose()
  {
    this.dialogRef.close();
  }

}
