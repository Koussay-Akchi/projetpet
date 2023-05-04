import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carnet-animal',
  templateUrl: './carnet-animal.component.html',
  styleUrls: ['./carnet-animal.component.css']
})
export class CarnetAnimalComponent {

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

  submit(login: any){
    console.log("formulaire envoye",login)
    alert("non encore implementee")
    //console.log(login.form.controls)
  }

}
