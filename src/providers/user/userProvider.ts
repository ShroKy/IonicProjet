import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../modele/user';
import { Trajet } from "../../modele/trajet";
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

	private users: User[] = [];	

  constructor() {
    var nicolasData = { login: "nicolas", mdp: "1234", info: "c'est moi", trajets: Array<Trajet>() };
    var anakinData = { login: "anakin", mdp: "1234", info: "c'est anakin", trajets: Array<Trajet>() };
    var dokuData = { login: "doku", mdp: "1234", info: "c'est doku", trajets: Array<Trajet>() };
    var spyroData = { login: "spyro", mdp: "1234", info: "c'est spyro", trajets: Array<Trajet>() };
    var crashData = { login: "crash", mdp: "1234", info: "c'est crash", trajets: Array<Trajet>() };
    var nicolas = new User(nicolasData);
    var anakin = new User(anakinData);
    var doku = new User(dokuData);
    var spyro = new User(spyroData);
    var crash = new User(crashData);
    this.users.push(nicolas);
    this.users.push(anakin);
    this.users.push(doku);
    this.users.push(spyro);
    this.users.push(crash);
  }

  public getUsers(): User[] {
  	return this.users;
  }

  public findUser(userName: String, password: String): User{
    console.log("try to find user :"+userName+" "+password)
    var user = null;
    this.users.find(function(element){
      if(element.getLogin() == userName && element.getMdp() == password){
        user = element;
        return true;
      }else{
        return false;
      }
    });
    return user;
  }

  public getUser(_username: string): User{
    var value = null;
    this.users.forEach(user => {
      if(user.getLogin() == _username){
        value = user;       
      }
    });
    return value; 
  }

}
