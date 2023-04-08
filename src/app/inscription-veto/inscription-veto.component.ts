import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-veto',
  templateUrl: './inscription-veto.component.html',
  styleUrls: ['./inscription-veto.component.css']
})
export class InscriptionVetoComponent {
  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }
}
