import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { getFirestore ,  collection, doc, getDoc} from 'firebase/firestore';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  constructor(private dataService: DataService) {}
  
  title = 'projet-pet';

  id_animal = 234;


  set_id_animal(id: number){
    this.dataService.id_animal=id;
  }



/*
  db = getFirestore();
  colRef = collection(this.db,"user");
  docRef = doc(this.colRef, '0QDtFXLLZHxefQWk213w');
  

  documentData : any;
  
  
  async ngOnInit(): Promise<void>{
    var docSnap = await getDoc(this.docRef);
      console.log(docSnap.exists)
      this.documentData =  doc(this.db, 'user', '0QDtFXLLZHxefQWk213w');
    console.log(this.documentData);


const docSnap = await getDoc(this.docRef);
if (docSnap.exists()) {
  console.log(docSnap.data()['name']);
} else {
  console.log("No such document!");
}

}*/

}