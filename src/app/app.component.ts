import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getFirestore , collection, doc, getDoc} from 'firebase/firestore';
import { AngularFireModule } from "@angular/fire/compat";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'projet-pet';
  db = getFirestore()
  colRef = collection(this.db,"user")
  docRef = doc(this.colRef, '0QDtFXLLZHxefQWk213w');
  

  documentData : any;
  
  
  async ngOnInit(): Promise<void>{
    var docSnap = await getDoc(this.docRef);
    const data=docSnap
    console.log("test")
    console.log(data)
  }

}
