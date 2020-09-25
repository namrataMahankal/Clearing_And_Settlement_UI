import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClearingMemberComponent } from './Components/ClearingMember/clearingmember.component';
import { ClearingHouseComponent } from './Components/ClearingHouse/clearinghouse.component';
import {AdminComponent}   from './Components/Admin/admin.component';
import {LoginComponent}   from './Components/Login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
<<<<<<< HEAD

=======
import {MatGridListModule} from '@angular/material/grid-list';
>>>>>>> c0a435764926b33776f7dd2599a8962fcc04c515

@NgModule({
  declarations: [
    AppComponent,
    ClearingMemberComponent,
    ClearingHouseComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatSlideToggleModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
<<<<<<< HEAD
   // FormBuilder,
<<<<<<< HEAD
   ReactiveFormsModule
=======
   ReactiveFormsModule,
>>>>>>> c0a435764926b33776f7dd2599a8962fcc04c515
=======
    // FormBuilder,
    ReactiveFormsModule,
>>>>>>> ef3e3bbd283e6774a2f5561477ad2a3de7971649
    MatBadgeModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }