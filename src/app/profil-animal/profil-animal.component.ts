import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profil-animal',
  templateUrl: './profil-animal.component.html',
  styleUrls: ['./profil-animal.component.css']
})
export class ProfilAnimalComponent {

  animal: any;

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {}


  supprimer(){
    var id_animal= this.dataService.id_animal;
    this.http.delete(`http://localhost:3005/animals/${id_animal}`).subscribe(
  (response) => {
    console.log("Animal supprime");
  }
);
  }

  ngOnInit() {
    var id_animal= this.dataService.id_animal;

    this.http.get<any[]>(`http://localhost:3005/animals/${id_animal}`)
      .subscribe((data) => {
        this.animal = data;
        console.log(this.animal)
      });
      
  }


  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
