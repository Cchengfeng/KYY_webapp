import { LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppGlobal {

}


@Injectable()
export class AppService {

    constructor(public http: HttpClient) { }

    https(type,path,data,header){
      if(type == "post"){
        this.http.post(path,data,{headers:header})
        .subscribe(
                (val) => {
                    console.log("POST call successful value returned in body",
                      val);
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
      }else if(type == "get"){
        this.http.get(path,{headers:header})
        .subscribe(
                (val) => {
                    console.log("POST call successful value returned in body",
                      val);
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
      }

    }

}
