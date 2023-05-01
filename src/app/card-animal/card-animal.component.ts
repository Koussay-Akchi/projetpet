import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

//import * as data from '../../assets/ExampleAnimal.json';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.css']
})
export class CardAnimalComponent implements OnInit {
  an : any;
  animals: any;
  code() {
    alert("le code est : 742");
  }

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {}

    ngOnInit() {
      var id_animal= this.dataService.id_animal;
  
      this.http.get<any[]>('http://localhost:3005/animals/')
        .subscribe((data) => {
          this.animals = data;
          console.log(this.animals)
        });
        
    }
  
    set_id_animal(id: number) {
      this.dataService.set_id_animal(id);
    }
  


/*
  ngOnInit() {
    this.an = data;
    this.animals=this.an.default.animals;

    console.log(this.animals);
 
  }*/

  
}
