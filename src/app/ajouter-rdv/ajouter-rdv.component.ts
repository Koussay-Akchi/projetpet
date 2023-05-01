import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.css']
})
export class AjouterRdvComponent {

  constructor(private http: HttpClient) { }

  submit(login: any){
  
    if (login.form.valid) {
      console.log("Formulaire envoyé")

    // get the animal information
    this.http.get('http://localhost:3005/animals/' + login.value.id_animal).subscribe((animal: any) => {
  
      // create the new appointment object with the animal's information
      const newRdv = {
        id_animal: login.value.id_animal,
        date: login.value.date,
        description: login.value.description,
        vetoName: "Azer",
        animalName: animal.name // complete the object with the animal's name
      };
  
      // post the new appointment to the server
      this.http.post('http://localhost:3005/rdv', newRdv).subscribe(() => {
        console.log("RDV ajouté avec succès");
      }, error => {
        console.log("Erreur lors de l'ajout du RDV", error);
      });
    }, error => {
      console.log("Erreur lors de la récupération des informations de l'animal", error);
    });
  }else{
      console.log("Formulaire incorrect")
}
}
  }