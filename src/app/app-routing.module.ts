import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClearingMemberComponent } from './Components/ClearingMember/clearingmember.component';
import { ClearingHouseComponent } from './Components/ClearingHouse/clearinghouse.component';


const routes: Routes = [
  {path: 'clearing-member',component: ClearingMemberComponent},
  {path: 'clearing-house',component: ClearingHouseComponent},
  {path:'',redirectTo:'/clearing-member',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
