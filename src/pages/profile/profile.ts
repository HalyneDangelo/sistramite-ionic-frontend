import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { UsuarioDTO } from '../../models/usuario.dto';
import { UsuarioService } from '../../services/domain/usuario.service';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  usuario: UsuarioDTO;

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email).subscribe(response => {
        this.usuario = response;
        //buscar imagem
      },
      error => {});
    }
  }

}
