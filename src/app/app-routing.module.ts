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
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inscriptionu', component: InscriptionUserComponent },
  { path: 'inscriptionv', component: InscriptionVetoComponent },
  { path: 'loginv', component: LoginVetoComponent },
  { path: 'loginu', component: LoginUserComponent },
  { path: 'magasin', component: MagasinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
