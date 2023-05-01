import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { MagasinComponent } from './magasin/magasin.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { InscriptionVetoComponent } from './inscription-veto/inscription-veto.component';
import { LoginVetoComponent } from './login-veto/login-veto.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { AjouterAnimalComponent } from './ajouter-animal/ajouter-animal.component';
import { CardAnimalComponent } from './card-animal/card-animal.component';
import { ProfilVetoComponent } from './profil-veto/profil-veto.component';
import { RdvComponent } from './rdv/rdv.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProfilAnimalComponent } from './profil-animal/profil-animal.component';
import { CarnetAnimalComponent } from './carnet-animal/carnet-animal.component';
import { ConsulterVeterinaireComponent } from './consulter-veterinaire/consulter-veterinaire.component';
import { EvaluerVeterinaireComponent } from './evaluer-veterinaire/evaluer-veterinaire.component';
import { AjouterRdvComponent } from './ajouter-rdv/ajouter-rdv.component';
import { environment } from '../environments/environment';
import { RdvUserComponent } from './rdv-user/rdv-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    HomeComponent,
    LoginComponent,
    ContactComponent,
    MagasinComponent,
    FooterComponent,
    InscriptionUserComponent,
    InscriptionVetoComponent,
    LoginVetoComponent,
    LoginUserComponent,
    ProfilUserComponent,
    AjouterAnimalComponent,
    CardAnimalComponent,
    ProfilVetoComponent,
    RdvComponent,
    RechercheComponent,
    ProfilAnimalComponent,
    CarnetAnimalComponent,
    ConsulterVeterinaireComponent,
    EvaluerVeterinaireComponent,
    AjouterRdvComponent,
    RdvUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
