import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    RdvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
