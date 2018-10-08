import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutoService } from '../../services/domain/autos.service';

/**
 * Generated class for the AutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autos',
  templateUrl: 'autos.html',
})
export class AutosPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public autoService: AutoService) {
  }

  ionViewDidLoad() {
    this.autoService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
