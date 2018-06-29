import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { MenuComponent } from './menu/menu';
import { CreateTrajetFormComponent } from './create-trajet-form/create-trajet-form';
import { ListTrajetComponent } from './list-trajet/list-trajet';
import { ProfilComponent } from './profil/profil';
@NgModule({
	declarations: [LoginComponent,
    MenuComponent,
    CreateTrajetFormComponent,
    ListTrajetComponent,
    ProfilComponent],
	imports: [],
	exports: [LoginComponent,
    MenuComponent,
    CreateTrajetFormComponent,
    ListTrajetComponent,
    ProfilComponent]
})
export class ComponentsModule {}
