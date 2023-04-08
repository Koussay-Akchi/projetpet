import { Component } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  submit(login: any){
    console.log("formulaire envoye",login)
    //console.log(login.form.controls)
  }

}
