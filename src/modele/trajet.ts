import { User } from '../modele/user';

export interface TrajetData{
	arriver: string;
	depart: string;
	nombreDePlace: number;
	conducteur: User;
	passagers: User[];
}

export class Trajet implements TrajetData {
	arriver;
	depart;
	nombreDePlace;
	conducteur;
	passagers;

	public constructor(private trajetData: TrajetData) {
		this.depart = this.trajetData.depart;
		this.arriver = this.trajetData.arriver;
		this.nombreDePlace = this.trajetData.nombreDePlace;
		this.conducteur = this.trajetData.conducteur;
		this.passagers = Array<User>();
		if(this.trajetData.passagers){
			this.trajetData.passagers.forEach(user =>{
				this.passagers.push(new User(user));
			});
		}
	}
	public getArriver(): string {
		return this.arriver;
	}
	public setArriver(_arriver: string) {
		this.arriver = _arriver;
	}
	public getDepart(): string {
		return this.depart;
	}
	public setDepart(_depart: string) {
		this.depart = _depart;
	}
	public getNombreDePlace(): number {
		return this.nombreDePlace;
	}
	public setNombreDePlace(_nombreDePlace: number) {
		this.nombreDePlace = _nombreDePlace;
	}
	public getConducteur(): User {
		return this.conducteur;
	}
	public setConducteur(_conducteur: User) {
		this.conducteur = _conducteur;
	}
	public getPassagers(): User[] {
		return this.passagers;
	}
	public addPassager(_passager: User) {
		this.passagers.push(_passager);
	}
	public reservation() {
		this.nombreDePlace -= 1;
	}
}