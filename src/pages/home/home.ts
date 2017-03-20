import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { EchoService } from '../../providers/echo-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EchoService]
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public echoService: EchoService) {

  }

  public echoMessage: string = 'Echo Message from TypeScript!!' // echoMessage wird im html gebunden {{echoMessage}}

  sendEcho() {
    console.log('sendEcho ->' + this.echoMessage)
    this.echoService.getEcho(this.echoMessage)
        .then(resp => this.showEchoToast(resp))
        .catch(error => this.showErrorToast(error));
  }

  showEchoToast(message: string) {
    console.log('showEchoToast ->' + message);
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
 }

 showErrorToast(error: any) {
   console.log('showErrorToast ->' + error);
   let toast = this.toastCtrl.create({
     message: "Uuuups. Something went wrong!! " + error,
     duration: 3000
   });
   toast.present();
}

}
