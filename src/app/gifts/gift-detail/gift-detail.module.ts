import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftDetailPageRoutingModule } from './gift-detail-routing.module';

import { GiftDetailPage } from './gift-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftDetailPageRoutingModule
  ],
  declarations: [GiftDetailPage]
})
export class GiftDetailPageModule {}
