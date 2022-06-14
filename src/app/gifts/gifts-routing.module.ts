import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from '../user/profile/profile.page';

import { GiftsPage } from './gifts.page';

const routes: Routes = [
  {
    path: '',
    component: GiftsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'favorite',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/favorite/favorite.module').then(m => m.FavoritePageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftsPageRoutingModule { }
