import { Component } from '@angular/core';
import * as data from '../../assets/ExampleRdv.json';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent {
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


  ngOnInit() {
    this.rendez_vous = data;
    this.rdv=this.rendez_vous.default.rdv;

    console.log(this.rdv);
 
  }
}
