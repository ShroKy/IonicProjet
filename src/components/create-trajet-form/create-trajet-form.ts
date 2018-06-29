import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Trajet } from "../../modele/trajet";
import { User } from '../../modele/user';
import { UserData } from '../../modele/user';
import { TrajetProvider } from '../../providers/trajet/trajet';
/**
 * Generated class for the CreateTrajetFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'create-trajet-form',
  templateUrl: 'create-trajet-form.html'
})
export class CreateTrajetFormComponent {
  
  private createTrajetForm: FormGroup;
  private userData: UserData;

  constructor( 
    private formBuilder: FormBuilder,
    private trajetProvider: TrajetProvider
  ) {
    this.createTrajetForm = this.formBuilder.group({
      depart: ['', Validators.nullValidator],
      arriver: ['', Validators.nullValidator],
      nbPlace: ['', Validators.nullValidator]
    });
  }

  createTrajet(){
    let nbPlaceString = this.createTrajetForm.controls.nbPlace.value;
    this.userData = JSON.parse(localStorage.getItem("currenUser"));
    var user = new User(this.userData);
    var trajetData = { arriver: this.createTrajetForm.controls.arriver.value, 
                       depart: this.createTrajetForm.controls.depart.value,
                       nombreDePlace: this.createTrajetForm.controls.nbPlace.value,
                       conducteur: user,
                       passagers: Array<User>() 
                      }
    var trajet = new Trajet(trajetData);
    this.trajetProvider.addTrajet(trajet);
  }
}
