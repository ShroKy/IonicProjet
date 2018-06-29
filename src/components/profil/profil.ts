import { Component } from '@angular/core';
import { User } from '../../modele/user';
import { Trajet } from "../../modele/trajet";
import { UserData } from '../../modele/user';

/**
 * Generated class for the ProfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profil',
  templateUrl: 'profil.html'
})
export class ProfilComponent {

  private userData: UserData;
  private currentUser: User;
  private trajets: Trajet[];

  constructor() {
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    this.userData = JSON.parse(localStorage.getItem("currentUser"));
    this.currentUser = new User(this.userData);
    console.log("trajet dans user " + this.currentUser.getTrajets());
    this.trajets = this.currentUser.getTrajets();
    console.log("trajet dans le current user " + this.trajets);
  }

}
