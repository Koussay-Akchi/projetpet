import { Component } from '@angular/core';
//import * as data from '../../assets/ExampleVeto.json';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {


  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {}

  v : any;
  vetos: any;
  recherche = false;

  recherche_veto() {
    var name = (document.getElementById('name') as HTMLInputElement).value;
    var lastName = (document.getElementById('last_name') as HTMLInputElement).value;
    var gouvernorat = (document.getElementById('gouvernorat') as HTMLInputElement).value;
    
    this.recherche = true;
    
    /*this.http.get<any[]>(`http://localhost:3005/veto/?name=${name}&last_name=${lastName}&gouvernorate=${gouvernorat}`)
    .subscribe((data) => {
      this.vetos = data;
      console.log(this.vetos)
    });*/
    

    var filteredVetos = this.v.filter((veto: { name: string, last_name: string, gouvernorate: string }) => 
    veto.name.toLowerCase().includes(name.toLowerCase()) &&
    veto.last_name.toLowerCase().includes(lastName.toLowerCase()) &&
    veto.gouvernorate.toLowerCase().includes(gouvernorat.toLowerCase()));
    this.vetos = filteredVetos;
    
    //console.log(this.recherche);
  }


  set_id_veto(id: number) {
    this.dataService.set_id_veto(id);
    console.log(id)
  }

  ngOnInit() {

    var id_veto= this.dataService.id_veto;
  
    this.http.get<any[]>('http://localhost:3005/veto/')
      .subscribe((data) => {
        this.vetos = data;
        this.v=this.vetos;
        console.log(this.vetos)
      });
      
 
  }

}
