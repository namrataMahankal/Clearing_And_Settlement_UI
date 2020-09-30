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
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule} from '@angular/common/http';
import { AuthGaurdService } from './Service/auth-guard.service';
import { AuthenticationService } from './Service/authentication.service';
import { FormsModule } from '@angular/forms';

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
    // FormBuilder,
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGaurdService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }