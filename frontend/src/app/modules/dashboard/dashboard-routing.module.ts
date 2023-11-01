import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: NftComponent },
      { path: 'users', component: UsersComponent },
      { path: 'room', component: UsersComponent },
      { path: 'room-type', component: UsersComponent },
      { path: 'additional-fee', component: UsersComponent },
      { path: 'transactions', component: UsersComponent },
      { path: 'reports', component: UsersComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
