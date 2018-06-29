import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateTrajetPage } from '../../pages/create-trajet/create-trajet';
import { TrajetPage } from '../../pages/trajet/trajet';
import { ProfilPage } from '../../pages/profil/profil';
/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {


  constructor(private navCtrl: NavController) {
    console.log('Hello MenuComponent Component');
  }

  public goToCreateTrajet(event){
    console.log("gotoCreateTrajet");
  	this.navCtrl.push(CreateTrajetPage);
  }

  public goToTrajets(event){
    console.log("gotoTrajet");
    this.navCtrl.push(TrajetPage);
  }

  public goToProfil(event){
    console.log("gotoProfil");
    this.navCtrl.push(ProfilPage);
  }
}
