import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-animal',
  templateUrl: './ajouter-animal.component.html',
  styleUrls: ['./ajouter-animal.component.css']
})
export class AjouterAnimalComponent {
  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
