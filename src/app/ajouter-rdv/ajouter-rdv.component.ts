import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.css']
})
export class AjouterRdvComponent {

  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }
}
