import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/ExampleAnimal.json';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.css']
})
export class CardAnimalComponent implements OnInit {
  an : any;
  animals: any;

  ngOnInit() {
    this.an = data;
    this.animals=this.an.default.animals;

    console.log(this.animals);
 
  }

  
}
