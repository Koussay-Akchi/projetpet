import { Component, inject } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-pet';
  /*name = ''; 
  score = 0;
  firestore: Firestore = inject(Firestore);
  items$!: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }

  firebaseConfig = {
    apiKey: "AIzaSyDOA6p20739rR2F5gpC27Cq9WCd0v6rNPU",
    authDomain: "projet-pet.firebaseapp.com",
    databaseURL: "https://projet-pet-default-rtdb.firebaseio.com",
    projectId: "projet-pet",
    storageBucket: "projet-pet.appspot.com",
    messagingSenderId: "534837296167",
    appId: "1:534837296167:web:4689f618601230d964e202"
  };
    
     app = initializeApp(this.firebaseConfig);
    // Initialize Fir

  async addSandwich() {
    console.log("test")
    this.app.firestore().collection('sandwiches').add({
      name: this.name,
      score: this.score,
    })
    console.log("2") 
  }
  */
}
