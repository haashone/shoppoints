import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {

  @Input() filterPropsSubject: BehaviorSubject<Object>;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.filterPropsSubject.subscribe(props => {
      console.log(props["giftList"])
    })
  }

}
