import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {RoomTypesComponent} from '../dashboard/pages/room-types/room-types.component'
@NgModule({
  declarations: [
    RoomTypesComponent
  ],
  imports: [CommonModule,DashboardRoutingModule],
})
export class DashboardModule {}
