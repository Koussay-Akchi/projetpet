import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-animal',
  templateUrl: './profil-animal.component.html',
  styleUrls: ['./profil-animal.component.css']
})
export class ProfilAnimalComponent {

  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
