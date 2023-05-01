import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  id_animal=645;


  set_id_animal(id: number) {
    this.id_animal = id;
  }

  constructor() { }
}
