import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3005/animals/')
      .subscribe((data) => {
        this.animals = data;
        console.log(this.animals);
      });
  }
/*
  ngOnInit() {
    this.an = data;
    this.animals=this.an.default.animals;

    console.log(this.animals);
 
  }*/

  
}
