import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-veto',
  templateUrl: './inscription-veto.component.html',
  styleUrls: ['./inscription-veto.component.css']
})
export class InscriptionVetoComponent {
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    telephone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    sex: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.myForm.valid) {
      // handle form submission here
    }
  }
}
