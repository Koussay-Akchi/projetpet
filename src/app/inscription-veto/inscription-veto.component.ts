import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription-veto',
  templateUrl: './inscription-veto.component.html',
  styleUrls: ['./inscription-veto.component.css']
})
export class InscriptionVetoComponent {
  constructor(private http: HttpClient) { }

  submit(login: any){
    if (login.form.valid) {
      console.log("Formulaire envoyé");

      const email = login.value.email;

      this.http.get<any>(`http://localhost:3005/veto/?email=${email}`).subscribe(
        (response) => {
          if (response.length > 0) {
            alert('Email deja utilise');
            login.reset()
          } else {
            const newVeto = {
              name: login.value.name,
              last_name: login.value.last_name,
              gouvernorate: login.value.gouvernorate,
              sex: login.value.sex,
              address: login.value.address,
              score: 3,
              email: login.value.email
            };

            this.http.post<any>('http://localhost:3005/veto', newVeto).subscribe(
              response => {
                console.log(response);
              }
            );
            alert("Bienvenue!");
          }
        }
      );
    } else {
      console.log("Formulaire incorrect");
    }
  }
}
