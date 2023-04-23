import { Component } from '@angular/core';
import * as data from '../../assets/ExampleVeto.json';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {

  v : any;
  vetos: any;
  recherche = false;

  recherche_veto() {
    var name = (document.getElementById('name') as HTMLInputElement).value;
    var lastName = (document.getElementById('last_name') as HTMLInputElement).value;
    var gouvernorat = (document.getElementById('gouvernorat') as HTMLInputElement).value;
    
    this.recherche = true;
    var filteredVetos = this.v.veto.filter((veto: { name: string, last_name: string, gouvernorate: string }) => 
    veto.name.toLowerCase().includes(name.toLowerCase()) &&
    veto.last_name.toLowerCase().includes(lastName.toLowerCase()) &&
    veto.gouvernorate.toLowerCase().includes(gouvernorat));
    this.vetos = filteredVetos;

    //console.log(this.recherche);
  }

  ngOnInit() {
    this.v = data;
    this.vetos=this.v.default.veto;
    console.log(this.recherche);
    console.log(data);
 
  }

}
