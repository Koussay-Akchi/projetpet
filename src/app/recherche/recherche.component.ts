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
    this.recherche = true;
    //filtrer json
    console.log(this.recherche);
  }

  ngOnInit() {
    this.v = data;
    this.vetos=this.v.default.veto;
    console.log(this.recherche);
    console.log(data);
 
  }

}
