import { Component } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  submit(login: any){
   if(!login.control.invalid){
    console.log("formulaire envoye",login)
    alert("Connexion etablie!")
    //console.log(login.form.controls)

   }

  }

}
