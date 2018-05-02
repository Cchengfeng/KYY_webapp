import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { NewsPage } from '../news/news';



@Component({
  selector: 'login-content',
  templateUrl: 'login.html'
})

  export class LoginPage {
    name: string='a'
    username:string
    password:string
    path: string = 'https://randomuser.me/api/?results=25';

  constructor(public navCtrl: NavController,private http: HttpClient) {

  }
  changeClass(val){
    this.name = val
  }

  logIn(username, password){
    this.navCtrl.push(NewsPage);
    // let pramas = JSON.stringify({ username: username, password: password })
    //
    // this.http.post(this.path,pramas)
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
    //
    // console.log(username,password)


  }

}
