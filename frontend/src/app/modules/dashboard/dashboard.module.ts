import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {RoomTypesComponent} from '../dashboard/pages/room-types/room-types.component'
import {RoomComponent} from '../dashboard/pages/room/room.component'
import {AdditionalFeeComponent} from '../dashboard/pages/additional-fee/additional-fee.component'
import {TransactionComponent} from '../dashboard/pages/transactions/transactions.component'
@NgModule({
  declarations: [
    RoomTypesComponent,
    RoomComponent,
    AdditionalFeeComponent,
    TransactionComponent
  ],
  imports: [CommonModule,DashboardRoutingModule],
})
export class DashboardModule {}
