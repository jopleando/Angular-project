import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Your list of watched movies';
  msg:string= '';
 	films=[
	  {'name': 'El señor de los anillos','note':'5', 'description': 'buena'},
	 {'name': 'Harry Potter','note':'5', 'description': 'Muy buena'},
	  {'name': 'Pulp Fiction','note':'5', 'description': 'Super buena'}
	 ];

	model:any={};
	model2:any={};
	hideUpdate:boolean= true;

	addFilms():void{
			this.films.push(this.model);
			this.msg=' Added movie';
	}

	deleteFilms(i):void{
		var answer = confirm('Are you sure you want to eliminate it?');
		if (answer){
			this.films.splice(i, 1);
			this.msg=' Delete movie';
		}
	}

	myValue;
	editFilms(i):void{
		this.hideUpdate= false;
		this.model2.name= this.films[i].name;
		this.model2.note= this.films[i].note;
		this.model2.description= this.films[i].description;
		this.myValue=i;
	}


	updateFilm():void{
		let i = this.myValue;
		for(let j= 0; j< this.films.length; j++){
			if(i == j){
				this.films[i]= this.model2;
				this.model2 ={}
				this.msg=' Updated movie';
			}			
		}
	}

closeAlert():void{
	this.msg='';
}

}
