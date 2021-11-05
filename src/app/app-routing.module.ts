import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListerComponent } from './lister/lister.component';
import { LoginComponent } from './login/login.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';

const routes: Routes = [
  {
    path : '',redirectTo:'login',pathMatch:'full'
    
  },
 
        
        {
          path : '',
              component : LoginComponent},
          {
            path : 'accueil',
            component : DashboardComponent,
          },
          {
            path : 'ajouter',
            component : AjouterComponent,
          },
          {
            path : 'modifier',
            component : ModifierComponent,
          },
          {
            path : 'lister',
            component : ListerComponent,
          },
          {
            path : 'supprimer',
            component : SupprimerComponent,
          }
        

   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
