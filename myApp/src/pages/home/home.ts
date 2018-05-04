import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { Events } from 'ionic-angular';
//本地存储依赖
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/**
幻灯片自己播放函数
**/
export class HomePage {
    myEvent
  constructor(public navCtrl: NavController,public events: Events,private storage: Storage) {
    //接受发布的值   events.subscribe
    events.subscribe('user:created', (user, time) => {
       HomePage.prototype.myEvent = user;
      console.log(user);
      });

  }
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

   sonsoleToken(){
     // console.log(this.myEvent);
     this.storage.get('age').then((val) => {
       console.log('Your age is', val);
     });
   }




}
