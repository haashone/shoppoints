import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'gifts',
    loadChildren: () => import('./gifts/gifts.module').then(m => m.GiftsPageModule)
  },
  {
    path: 'filter-modal',
    loadChildren: () => import('./shared/modals/filter-modal/filter-modal.module').then( m => m.FilterModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
