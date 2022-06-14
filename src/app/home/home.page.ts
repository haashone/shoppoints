import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OperationService } from '../service/operation.service';
import { Animation, AnimationController } from '@ionic/angular';
import { MockService } from '../service/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('giftIcon', { read: ElementRef }) giftIcon;

  constructor(private service: MockService, private animationCtrl: AnimationController) {
  }


  ngOnInit() {
    this.service.getGifts().subscribe(x => {
      console.log(x)
    })
  }

  ionViewDidEnter() {
    const loadingAnimation = this.animationCtrl.create('loading-animation')
      .addElement(this.giftIcon.nativeElement)
      .duration(1000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' }
      ]);

    // Don't forget to start the animation!
    loadingAnimation.play();
  }
}
