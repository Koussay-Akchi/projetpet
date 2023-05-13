import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.component.html',
  styleUrls: ['./inscription-user.component.css']
})
export class InscriptionUserComponent {

  submit(login: any){
    console.log("formulaire envoye",login)
    alert("Félicitations ! Votre compte a été créé avec succès!")
    //console.log(login.form.controls)
  }

}
