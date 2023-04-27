import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { getFirestore ,  collection, doc, getDoc} from 'firebase/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'projet-pet';


  db = getFirestore();
  colRef = collection(this.db,"user");
  docRef = doc(this.colRef, '0QDtFXLLZHxefQWk213w');
  

  documentData : any;
  
  
  async ngOnInit(): Promise<void>{
   /* var docSnap = await getDoc(this.docRef);
      console.log(docSnap.exists)
      this.documentData =  doc(this.db, 'user', '0QDtFXLLZHxefQWk213w');
    console.log(this.documentData);

*/
const docSnap = await getDoc(this.docRef);
if (docSnap.exists()) {
  console.log(docSnap.data()['name']);
} else {
  console.log("No such document!");
}

}
}