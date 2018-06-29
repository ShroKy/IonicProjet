import { Component } from '@angular/core';
import { Trajet } from "../../modele/trajet";
import { TrajetProvider } from '../../providers/trajet/trajet';
import { User } from '../../modele/user';
import { UserData } from '../../modele/user';

/**
 * Generated class for the ListTrajetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-trajet',
  templateUrl: 'list-trajet.html'
})
export class ListTrajetComponent {

  private trajets: Trajet[];
  private currentUser: User;
  private userData: UserData;

  constructor(private trajetProvider: TrajetProvider) {
    this.trajets = this.trajetProvider.getTrajets();
    this.userData = JSON.parse(localStorage.getItem("currentUser"));
    this.currentUser = new User(this.userData); 
  }

  public reserver(trajet: Trajet){
    trajet.reservation();
    this.currentUser.addReservation(trajet);
    trajet.addPassager(this.currentUser);
  }

}
