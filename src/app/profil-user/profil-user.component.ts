import { Component } from '@angular/core';
import * as data from '../../assets/ExampleUser.json';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent {
  user : any;

  ngOnInit() {
    this.user = data
    console.log(this.user.user);
  }

}
