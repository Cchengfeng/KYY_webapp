import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/**
幻灯片自己播放函数
**/
export class HomePage {
   @ViewChild(Slides) slides: Slides;
   // ionViewDidEnter(){
   //        this.slides.startAutoplay();
   // }

   ionViewWillEnter(){
          this.slides.startAutoplay();
   }
    ionViewWillLeave(){
          this.slides.stopAutoplay();
   }



  constructor(public navCtrl: NavController) {

  }

}
