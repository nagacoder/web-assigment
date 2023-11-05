import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {RoomTypesComponent} from '../dashboard/pages/room-types/room-types.component'
import {RoomComponent} from '../dashboard/pages/room/room.component'
@NgModule({
  declarations: [
    RoomTypesComponent,
    RoomComponent
  ],
  imports: [CommonModule,DashboardRoutingModule],
})
export class DashboardModule {}
