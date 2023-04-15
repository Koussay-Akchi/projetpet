import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluer-veterinaire',
  templateUrl: './evaluer-veterinaire.component.html',
  styleUrls: ['./evaluer-veterinaire.component.css']
})
export class EvaluerVeterinaireComponent {

  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
