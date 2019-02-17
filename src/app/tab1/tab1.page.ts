import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Window } from 'selenium-webdriver';
import { AlertController } from '@ionic/angular';
 import * as info from './info.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss',  ]
})


export class Tab1Page {
  myphoto: any;
  window: Window;

  constructor(private camera: Camera, public alertCtrl: AlertController) {
   }

   openCamera() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 400,
      targetHeight: 400,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;

//popup message

    }, (err) => {
     // Handle error
    });
  
  }
  presentPrompt() {
    alert('Black');
  }
}
