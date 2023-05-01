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


  ngOnInit() {
    var id_animal= this.dataService.id_animal;

    this.http.get<any[]>(`http://localhost:3005/animals/${id_animal}`)
      .subscribe((data) => {
        this.animal = data;
        console.log(this.animal)
      });
      
  }

  set_id_animal(id: number) {
    this.dataService.set_id_animal(id);
  }


  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
