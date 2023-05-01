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

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {}


  ngOnInit() {
  var id_veto= this.dataService.id_veto;

  this.http.get<any[]>(`http://localhost:3005/veto/${id_veto}`)
    .subscribe((data) => {
      this.veto = data;
      console.log(this.veto)
    });
  }

  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
