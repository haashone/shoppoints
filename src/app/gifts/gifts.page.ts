import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { MockService } from '../service/mock.service';
import { ModalController } from '@ionic/angular';
import { FilterModalPage } from '../shared/modals/filter-modal/filter-modal.page';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.page.html',
  styleUrls: ['./gifts.page.scss'],
})
export class GiftsPage implements OnInit {

  giftList = [];
  categoriesList = [];
  Filter: string;
  categoryID = ""
  filterProps = {}
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(private service: MockService, private modalCtrl: ModalController, private router: Router) { }

  async presentModal() {

    this.filterProps = {
      "giftList": this.giftList,
      "categoriesList": this.categoriesList
    }
    const filterPropsSubject = new BehaviorSubject(this.filterProps);
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
      componentProps: {
        filterPropsSubject
      }
    });
    await modal.present();

    filterPropsSubject.subscribe((value: string) => {
      this.filterProps = value;
    });
    console.log(this.filterProps)

    modal.onDidDismiss().then((_ => {
      filterPropsSubject.unsubscribe();
    }));
  }


  ngOnInit() {
    this.initialElements()
    this.getAllCategories()
  }

  initialElements() {
    this.getAllgifts()
    this.resetCategoriesBtn()
    document.getElementById('allGiftsBtn').style.setProperty('--background', '#00b4db');
    document.getElementById('allGiftsBtn').style.setProperty('--color', 'white');
  }

  resetCategoriesBtn() {
    this.categoriesList.forEach(x => {
      document.getElementById(x.id).style.setProperty('--background', 'none');
      document.getElementById(x.id).style.setProperty('--color', 'black');

    })
  }

  onChangeEvent(event: any) {
    this.scrollToGiftsList()
  }

  FilterCategory(id, name) {
    this.getAllgifts()
    this.resetCategoriesBtn()
    this.giftList = this.giftList.filter(gift => gift.categorie === name.toLowerCase())

    document.getElementById('allGiftsBtn').style.setProperty('--background', 'none');
    document.getElementById('allGiftsBtn').style.setProperty('--color', 'black');

    document.getElementById(id).style.setProperty('--background', '#00b4db');
    document.getElementById(id).style.setProperty('--color', 'white');
  }

  getAllgifts() {
    this.service.getGifts().subscribe(gift => {
      this.giftList = gift;
    })
  }

  getAllCategories() {
    this.service.getCategories().subscribe(cat => {
      this.categoriesList = cat;
    })
  }

  scrollToGiftsList() {
    var elementToScroll = document.getElementById("allGifts");
    this.content.scrollToPoint(0, elementToScroll.offsetTop - 60, 500)
  }

  openDetail(gift) {
    this.router.navigateByUrl(`/tabs/gifts/gift-detail/` + gift.id + `/` + gift.marque);
  }

}
