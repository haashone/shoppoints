import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockService } from 'src/app/service/mock.service';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-gift-detail',
  templateUrl: './gift-detail.page.html',
  styleUrls: ['./gift-detail.page.scss'],
})
export class GiftDetailPage implements OnInit {

  giftID = '';
  giftMark = '';
  selectedGift = {};
  slideOpts = {}
  quantity = 1;
  similarGifts = [];
  MAX_QUANTITY = 3

  constructor(private service: MockService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.giftID = this.activatedRoute.snapshot.paramMap.get('id');
    this.giftMark = this.activatedRoute.snapshot.paramMap.get('giftMark');
    this.geetSelectedGift(this.giftID);
    this.getSimilarGifts();
  }

  geetSelectedGift(ID) {
    this.service.getGifts().subscribe(g => {
      this.selectedGift = g.filter(x => x.id === parseInt(ID))[0];
    })
  }

  getSimilarGifts() {
    this.service.getGifts().subscribe(g => {
      this.similarGifts = g.filter(x => x.categorie === this.selectedGift["categorie"])
        .filter(y => y.id != this.giftID);
    })
  }

  increaseQuantity() {
    if (this.quantity < this.MAX_QUANTITY) {
      this.quantity++
    } else {
      this.showToast("Maximum 3 cadeaux", "")
    }
  }

  decreaseQuantity() {
    if (this.quantity >= 1) {
      this.quantity--
    }
  }

  addToCart() {
    if (this.quantity == 1) {
      this.showToast("Cadeau ajouté avec succès", "success")
    } else {
      this.showToast("Cadeaux ajoutés avec succès", "success")
    }
  }

  openDetail(gift) {
    this.router.navigateByUrl(`/tabs/gifts/gift-detail/` + gift.id + `/` + gift.marque);
  }

  async showToast(msg: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      animated: true,
      color: color
    });
    toast.present();
  }
}
