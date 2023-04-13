import { Component } from '@angular/core';
import * as data from '../../assets/ExampleRdv.json';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent {
  rdv : any;
  rendez_vous:any;

  ngOnInit() {
    this.rendez_vous = data;
    this.rdv=this.rendez_vous.default.rdv;

    console.log(this.rdv);
 
  }
}
