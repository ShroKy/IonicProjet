import { Trajet } from "./trajet";

export interface UserData{
	login: string;
	mdp: string;
	info: string;
	trajets: Trajet[];
}

export class User implements UserData{
	//private 
	login;
	mdp;
	info;
	trajets;

	public constructor(private userData: UserData){
		this.login = this.userData.login;
		this.mdp = this.userData.mdp;
		this.info = this.userData.info;
		this.trajets = Array<Trajet>();
		if(this.userData.trajets){
			this.userData.trajets.forEach(trajet=>{
				this.trajets.push(new Trajet(trajet));
			});
		}
	}

	
	public getLogin(): string{
		return this.login;
	}

	public setLogin(_login: string){
		this.login = _login;
		this.saveUser();
	}

	public getMdp(): string{
		return this.mdp;
	}

	public setMdp(_mdp: string){
		this.mdp = _mdp;
		this.saveUser();
	}

	public getInfo(): string{
		return this.info;
	}

	public setInfos(_info: string){
		this.info = _info;
		this.saveUser();
	}

	public getTrajets(){
		return this.trajets;
	}

	public addReservation(_trajet: Trajet){
		this.trajets.push(_trajet);
		this.saveUser();
	}

	private saveUser(){
		window.localStorage.setItem("currentUser", JSON.stringify(this));
	}
}