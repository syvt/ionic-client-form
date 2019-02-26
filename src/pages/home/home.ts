import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiSqliteService } from '../../services/apiSqliteService';
import { TabsPage } from '../tabs/tabs';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';

/* var dataType = {};

dataType.integer = 'INTEGER';
dataType.text = 'TEXT';
dataType.numeric='NUMERIC';
dataType.real = 'REAL';
dataType.blob = 'BLOB'; */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  app: any = {
    id: "SPEEDTEST",
    name: "Speedtest VN",
    image: "assets/imgs/logo.png"
  }
  constructor(private navCtrl: NavController
    , private apiSqlite: ApiSqliteService
    , private apiPublic: ApiHttpPublicService
  ) { }

  ngOnInit() {

    //chay o che do offline
    setTimeout(() => {
      this.callForward();
    }, 3000); //5 giay sau cho chay qua form moi

  }

  callForward() {

    this.navCtrl.setRoot(TabsPage);

  }

}
