import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  id_animal=645;
  id_veto=2;


  set_id_animal(id: number) {
    this.id_animal = id;
  }

  set_id_veto(id: number) {
    this.id_veto = id;
  }

  constructor() { }
}
