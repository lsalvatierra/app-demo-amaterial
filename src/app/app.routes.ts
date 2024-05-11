import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { CursoListaComponent } from './dashboard/cursos/curso-lista/curso-lista.component';
import { CursoDetalleComponent } from './dashboard/cursos/curso-detalle/curso-detalle.component';
import { EstadoListaComponent } from './dashboard/estados/estado-lista/estado-lista.component';
import { EstadoDetalleComponent } from './dashboard/estados/estado-detalle/estado-detalle.component';
import { PostListaComponent } from './dashboard/posts/post-lista/post-lista.component';
import { PostDetalleComponent } from './dashboard/posts/post-detalle/post-detalle.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
      path: 'dashboard', component: DashboardComponent,
      canActivate: [authGuard],
      children : [
              {path: 'home', component: HomeComponent},
              {path: 'curso', component: CursoListaComponent},
              {path: 'curso/:id', component: CursoDetalleComponent},
              {path: 'estado', component: EstadoListaComponent},
              {path: 'estado/:id', component: EstadoDetalleComponent},
              {path: 'post', component: PostListaComponent},
              {path: 'post/:id', component: PostDetalleComponent},
            ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}

];
