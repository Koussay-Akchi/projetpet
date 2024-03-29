import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { MagasinComponent } from './magasin/magasin.component';
import { InscriptionUserComponent } from './inscription-user/inscription-user.component';
import { InscriptionVetoComponent } from './inscription-veto/inscription-veto.component';
import { LoginVetoComponent } from './login-veto/login-veto.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { AjouterAnimalComponent } from './ajouter-animal/ajouter-animal.component';
import { ProfilVetoComponent } from './profil-veto/profil-veto.component';
import { ProfilAnimalComponent } from './profil-animal/profil-animal.component';
import { CarnetAnimalComponent } from './carnet-animal/carnet-animal.component';
import { AjouterRdvComponent } from './ajouter-rdv/ajouter-rdv.component';
import { EvaluerVeterinaireComponent } from './evaluer-veterinaire/evaluer-veterinaire.component';
import { RdvUserComponent } from './rdv-user/rdv-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inscriptionu', component: InscriptionUserComponent },
  { path: 'inscriptionv', component: InscriptionVetoComponent },
  { path: 'loginv', component: LoginVetoComponent },
  { path: 'loginu', component: LoginUserComponent },
  { path: 'profil', component: ProfilUserComponent },
  { path: 'cabinet', component: ProfilVetoComponent },
  { path: 'animal', component: ProfilAnimalComponent },
  { path: 'carnet', component: CarnetAnimalComponent },
  { path: 'ajout_animal', component: AjouterAnimalComponent },
  { path: 'mes_rdv', component: RdvUserComponent },
  { path: 'ajout_rdv', component: AjouterRdvComponent },
  { path: 'evaluer', component: EvaluerVeterinaireComponent },
  { path: 'magasin', component: MagasinComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
