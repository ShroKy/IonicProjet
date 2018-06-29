import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginComponent } from "../components/login/login";
import { MenuComponent } from "../components/menu/menu";
import { CreateTrajetFormComponent } from '../components/create-trajet-form/create-trajet-form';
import { ListTrajetComponent } from '../components/list-trajet/list-trajet';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrajetPage } from '../pages/trajet/trajet';
import { UserProvider } from '../providers/user/userProvider';
import { TrajetProvider } from '../providers/trajet/trajet';
import { MenuAppPage } from '../pages/menu-app/menu-app';
import { CreateTrajetPage } from '../pages/create-trajet/create-trajet';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilComponent } from '../components/profil/profil';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    TrajetPage,
    MenuAppPage,
    MenuComponent,
    CreateTrajetPage,
    CreateTrajetFormComponent,
    ListTrajetComponent,
    ProfilPage,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent,
    TrajetPage,
    MenuAppPage,
    MenuComponent,
    CreateTrajetPage,
    CreateTrajetFormComponent,
    ListTrajetComponent,
    ProfilPage,
    ProfilComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    TrajetProvider
  ]
})
export class AppModule {}
