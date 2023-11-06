import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { NftComponent } from './pages/nft/nft.component';
import { UsersComponent } from './pages/users/users.component';
import { RoomTypesComponent } from './pages/room-types/room-types.component';
import { AddRoomTypesComponent } from './pages/add-room-types/add-room-types.component';
import { RoomComponent } from './pages/room/room.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { AdditionalFeeComponent } from './pages/additional-fee/additional-fee.component';
import { AddAdditionalFeeComponent } from './pages/add-additional-fee/add-additional-fee.component';
import { TransactionComponent } from './pages/transactions/transactions.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: NftComponent },
      { path: 'users', component: UsersComponent },
      { path: 'room', component: RoomComponent },
      { path: 'room-type', component: RoomTypesComponent },
      { path: 'add-room-type', component: AddRoomTypesComponent },
      { path: 'add-room', component: AddRoomComponent },
      { path: 'additional-fee', component: AdditionalFeeComponent },
      { path: 'add-additional-fee', component: AddAdditionalFeeComponent },
      { path: 'transactions', component: TransactionComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
