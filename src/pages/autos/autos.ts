import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutoService } from '../../services/domain/autos.service';
import { AutoDTO } from '../../models/autos.dto';


@IonicPage()
@Component({
  selector: 'page-autos',
  templateUrl: 'autos.html',
})
export class AutosPage {

  items: AutoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public autoService: AutoService) {
  }

  ionViewDidLoad() {
    this.autoService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }
}
