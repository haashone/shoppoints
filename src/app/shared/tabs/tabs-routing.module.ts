import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'gifts',
        children: [
          {
            path: '',
            loadChildren: () => import('../../gifts/gifts.module').then(m => m.GiftsPageModule)
          },
          {
            path: 'gift-detail/:id/:giftMark',
            loadChildren: () => import('../../gifts/gift-detail/gift-detail.module').then(m => m.GiftDetailPageModule)
          }
        ]
      },
      {
        path: 'favorite',
        children: [
          {
            path: '',
            loadChildren: () => import('../../user/favorite/favorite.module').then(m => m.FavoritePageModule)
          }
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () => import('../../user/order/order.module').then(m => m.OrderPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../../user/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
