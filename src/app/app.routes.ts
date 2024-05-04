import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CursoComponent } from './dashboard/curso/curso.component';
import { inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
      path: 'dashboard', component: DashboardComponent,
      canActivate: [() => inject(AuthService).isLogged()],
      children : [
              {path: 'home', component: HomeComponent},
              {path: 'curso', component: CursoComponent},
            ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}

];
