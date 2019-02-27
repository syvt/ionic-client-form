import { Component } from '@angular/core';
import { NavController, ModalController, Platform, LoadingController, AlertController } from 'ionic-angular';

import { DynamicFormMobilePage } from '../dynamic-form-mobile/dynamic-form-mobile';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';
import { DynamicFormWebPage } from '../dynamic-form-web/dynamic-form-web';
import { TabsPage } from '../tabs/tabs';
import { ApiStorageService } from '../../services/apiStorageService';
import { ApiResourceService } from '../../services/apiResourceServices';
import { ApiAuthService } from '../../services/apiAuthService';

@Component({
  selector: 'page-baoduong',
  templateUrl: 'baoduong.html'
})
export class BaoduongPage {

  constructor(
    private navCtrl: NavController
    , private pubService: ApiHttpPublicService
    , private auth: ApiAuthService
    , private resources: ApiResourceService
    , private apiStorageService: ApiStorageService
    , private platform: Platform
    , private modalCtrl: ModalController
    , private loadingCtrl: LoadingController
    , private alertCtrl: AlertController
  ) { }

  ngOnInit() {
   this.pubService.getDynamicForm("http://localhost:8080/json-form/form?form=baoduong")
   .then(data=>{
     console.log('DATA TRA VE',data);

     let formData = {
       callback:this.callbackFunction,
       form:data
     }

     //this.openModal(DynamicFormWebPage,formData);

     this.navCtrl.push(DynamicFormWebPage,formData);

  })
   .catch(err=>console.log('err',err));
  }


  openModal(form,data) {
    let modal = this.modalCtrl.create(form, data);
    modal.present();
  }



  callbackFunction = function (res,parent){
  
    return new Promise((resolve,reject)=>{
        console.log('res OK', res);
        resolve({next:"CLOSE"});
    })
  }.bind(this);

}
