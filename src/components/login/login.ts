import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/userProvider';
import { MenuAppPage } from '../../pages/menu-app/menu-app';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  private loginForm: FormGroup;

  constructor(
    private userProvider: UserProvider, 
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.nullValidator],
      password: ['', Validators.nullValidator],
    });
  }

  logForm(){
    var user = this.userProvider.findUser(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    if(user != null){
      console.log("user find");
      window.localStorage.setItem("currentUser", JSON.stringify(user));
      this.navCtrl.push(MenuAppPage);
    }else{
    	console.log("user not found");
    }
  }
}
