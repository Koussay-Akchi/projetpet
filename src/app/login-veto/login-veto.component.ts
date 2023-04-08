import { Component } from '@angular/core';

@Component({
  selector: 'app-login-veto',
  templateUrl: './login-veto.component.html',
  styleUrls: ['./login-veto.component.css']
})
export class LoginVetoComponent {
  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }
}
