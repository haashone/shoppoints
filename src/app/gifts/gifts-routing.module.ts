import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from '../user/profile/profile.page';

import { GiftsPage } from './gifts.page';

const routes: Routes = [
  {
    path: '',
    component: GiftsPage
  },
  {
    path: '',
    component: GiftsPage
  },
  {
    path: 'gift-detail/:d',
    loadChildren: () => import('./gift-detail/gift-detail.module').then(m => m.GiftDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftsPageRoutingModule { }
