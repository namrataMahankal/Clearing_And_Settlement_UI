// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { ClearingMemberComponent } from './Components/ClearingMember/clearingmember.component';
// import { ClearingHouseComponent } from './Components/ClearingHouse/clearinghouse.component';
// import { LoginComponent } from './Components/Login/login.component';
// import { AdminComponent } from './Components/Admin/admin.component';



// const routes: Routes = [
//   {path: 'clearing-member',component: ClearingMemberComponent},
//   {path: 'login',component: LoginComponent},
//   {path: 'admin',component: AdminComponent},
//   {path: 'clearing-house',component: ClearingHouseComponent},
//   {path:'',redirectTo:'/login',pathMatch: 'full'}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClearingMemberComponent } from './Components/ClearingMember/clearingmember.component';
import { ClearingHouseComponent } from './Components/ClearingHouse/clearinghouse.component';
import { LoginComponent } from './Components/Login/login.component';
import { AdminComponent } from './Components/Admin/admin.component';
import { AuthGaurdServiceCM,AuthGaurdServiceCH,AuthGaurdServiceAdmin  } from  './Service/auth-guard.service';

const routes: Routes = [
  {path: 'clearing-member',component: ClearingMemberComponent,canActivate:[AuthGaurdServiceCM]},
  {path: 'login',component: LoginComponent},
  {path: 'admin',component: AdminComponent,canActivate:[AuthGaurdServiceAdmin]},
  {path: 'clearing-house',component: ClearingHouseComponent,canActivate:[AuthGaurdServiceCH]},
  {path:'',redirectTo:'/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

