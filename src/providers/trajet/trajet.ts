import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trajet } from "../../modele/trajet";
import { UserProvider } from '../user/userProvider'
import { User } from '../../modele/user';
/*
  Generated class for the TrajetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrajetProvider {

  private trajets: Trajet[] = [];

  constructor(private userProvider: UserProvider) {
    var doku = this.userProvider.getUser("doku");
    var anakin = this.userProvider.getUser("anakin");
    var spyro = this.userProvider.getUser("spyro");
    var crash = this.userProvider.getUser("crash");
    var trajet1Data = { depart:"Clermont-Ferrand", arriver: "Paris", nombreDePlace: 4, conducteur: doku, passagers: Array<User>()};
    var trajet2Data = { depart:"Lyon", arriver: "Le puy en Velay", nombreDePlace: 4, conducteur: anakin, passagers: Array<User>()};
    var trajet3Data = { depart:"Aix en Provence", arriver: "Marseille", nombreDePlace: 4, conducteur: spyro, passagers: Array<User>()};
    var trajet4Data = { depart:"Nanterre", arriver: "Brest", nombreDePlace: 4, conducteur: crash, passagers: Array<User>()};
    var trajet1 = new Trajet(trajet1Data);
    var trajet2 = new Trajet(trajet2Data);
    var trajet3 = new Trajet(trajet3Data);
    var trajet4 = new Trajet(trajet4Data);
    this.trajets.push(trajet1);
    this.trajets.push(trajet2);
    this.trajets.push(trajet3);
    this.trajets.push(trajet4);
  }

  public addTrajet(_trajet: Trajet){
    this.trajets.push(_trajet);
  }

  public getTrajets(): Trajet[]{
    return this.trajets;
  }
}
