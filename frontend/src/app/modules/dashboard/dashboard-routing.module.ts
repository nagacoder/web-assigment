import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { UsersComponent } from './pages/users/users.component';
import { RoomTypesComponent } from './pages/room-types/room-types.component';
import { AddRoomTypesComponent } from './pages/add-room-types/add-room-types.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: NftComponent },
      { path: 'users', component: UsersComponent },
      { path: 'room', component: UsersComponent },
      { path: 'room-type', component: RoomTypesComponent },
      { path: 'add-room-type', component: AddRoomTypesComponent },
      { path: 'additional-fee', component: UsersComponent },
      { path: 'transactions', component: UsersComponent },
      { path: 'reports', component: UsersComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
