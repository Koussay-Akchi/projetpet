import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-animal',
  templateUrl: './ajouter-animal.component.html',
  styleUrls: ['./ajouter-animal.component.css']
})
export class AjouterAnimalComponent {

  constructor(private http: HttpClient) { }


  submit(login: any){
    
    if (login.form.valid) {
      console.log("Formulaire envoyé")
  
    const newAnimal = {
      name: login.value.name,
      age: login.value.age,
      sex: login.value.sex,
      type: login.value.type_a,
      weight: login.value.weight,
      fur_length: login.value.fur_length
    };
  

    this.http.post<any>('http://localhost:3005/animals', newAnimal).subscribe(
      response => {
        console.log(response);
      }
    );
    alert("Bienvenue petite creature")

    }else{
      console.log("Formulaire incorrect")
    }

    //console.log(login.form.controls)
  }

}