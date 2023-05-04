import { Component } from '@angular/core';

@Component({
  selector: 'app-login-veto',
  templateUrl: './login-veto.component.html',
  styleUrls: ['./login-veto.component.css']
})
export class LoginVetoComponent {
  submit(login: any){
    if(!login.control.invalid){
     console.log("formulaire envoye",login)
     alert("Connexion etablie!")
     //console.log(login.form.controls)
 
    }
 
   }
}
