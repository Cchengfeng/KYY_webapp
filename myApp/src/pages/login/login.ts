import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';

//HTTP请求依赖
import {HttpClient} from "@angular/common/http";
import { NewsPage } from '../news/news';

//MD5加密依赖
import {Md5} from "ts-md5/dist/md5";
import { AppService } from './../../app/app.service';

//跨页面数据传递依赖
import { Events } from 'ionic-angular';

//本地存储依赖
import { Storage } from '@ionic/storage';



@Component({
  selector: 'login-content',
  templateUrl: 'login.html'
})

  export class LoginPage {



    name: string='a'
    username:string=''
    password:string=''

    path: string =''

  constructor(public navCtrl: NavController,public events: Events,private http: HttpClient,public serve: AppService,private storage: Storage) {

  }
  changeClass(val){
    this.name = val
  }





  logIn(username, password){
    //页面跳转方法
    // this.navCtrl.push(NewsPage);

    // 时间格式(对象)转字符串
    this.pathPost = `http://192.168.2.200:8081/ccylapi/sms/${this.username}/sendRegistVerificationCode`
    this.pathGet = 'http://192.168.2.200:8081/ccylapi/patient/patientGroups'
    // console.log(this.path);
    let myDate =Date.now(),
        Key= 'ckGnQC1Vr^TSvq8xEIkK1LL3DX%t^tgxg!Afh&PV!I*g^z85AQLZqMsSQjebLn5r';
    let pwd = Md5.hashStr(myDate+Key).toString(),
        sj = JSON.stringify(myDate),
        header = {
              'sign':sj,
              'secret':pwd,
            },

          user = "123456";
    //发布其他页面需要的值this.events.publish
          // console.log('User created!')
          // this.events.publish('user:created', user, Date.now());
          // console.log(user)
      let age:string
      this.storage.set('age',11223344);

        // pramas = JSON.stringify(data);
       // git请求方法
    // this.serve.https("get",this.path,null,header)



    //HTTP请求方法
    // this.serve.https("post",this.pathPost,null,header)
    // this.http.post(this.path,null,{headers:header})
    // .subscribe(
    //         (val) => {
    //             console.log("POST call successful value returned in body",
    //               val);
    //         },
    //         response => {
    //             console.log("POST call in error", response);
    //         },
    //         () => {
    //             console.log("The POST observable is now completed.");
    //         });


  }

}
