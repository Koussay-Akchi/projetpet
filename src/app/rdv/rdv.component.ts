import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
//import * as data from '../../assets/ExampleRdv.json';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent {
  
  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {}

  
  rdv : any;
  fil = false;
  rendez_vous:any;
  m_date = false;
  modifier_date(){
    this.m_date=true;
    
  }

  confirmer(){
    this.m_date=false;
    //changer dans firebase
  }

  filtrer(){
    this.fil=true;
  }

  recherche_rdv() {
    var name = (document.getElementById('name') as HTMLInputElement).value;
    var code = (document.getElementById('code') as HTMLInputElement).value;
    var description = (document.getElementById('description') as HTMLInputElement).value;
    
    var filteredRdv = this.rendez_vous.rdv.filter((rdv: { animalName: string, id: number, description: string }) => 
    rdv.animalName.toLowerCase().includes(name.toLowerCase()) &&
    rdv.id.toString().includes(code) &&
    rdv.description.toLowerCase().includes(description));
    this.rdv = filteredRdv;

    //console.log(this.recherche);
  }

  supprimer(id :number, id_veto :number, date :string){
    this.http.delete(`http://localhost:3005/rdv/${id}?id_veto=${id_veto}&date=${date}`).subscribe(
  (response) => {
    console.log("rdv supprime");
    alert("Rendez-vous supprime")
  }
);
}

  set_id_animal(id: number) {
    this.dataService.set_id_animal(id);
  }

  ngOnInit() {

    this.http.get<any[]>('http://localhost:3005/rdv/')
      .subscribe((data) => {
        this.rdv = data;
        console.log(this.rdv)
      });
      
  }
}
