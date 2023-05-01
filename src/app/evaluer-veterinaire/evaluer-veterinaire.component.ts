import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-evaluer-veterinaire',
  templateUrl: './evaluer-veterinaire.component.html',
  styleUrls: ['./evaluer-veterinaire.component.css']
})
export class EvaluerVeterinaireComponent {

  veto:any;
Array: any;

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {}

  tab: any[] = [];
  tab2: any[] = [];


  ngOnInit() {
  var id_veto= this.dataService.id_veto;

  this.http.get<any[]>(`http://localhost:3005/veto/${id_veto}`)
    .subscribe((data) => {
      this.veto = data;
      console.log(this.veto)
      this.tab = new Array(this.veto.score);
      this.tab2 = new Array(5 - this.tab.length);
    });
  }

  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
