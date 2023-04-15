import { Component } from '@angular/core';

@Component({
  selector: 'app-carnet-animal',
  templateUrl: './carnet-animal.component.html',
  styleUrls: ['./carnet-animal.component.css']
})
export class CarnetAnimalComponent {

  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
