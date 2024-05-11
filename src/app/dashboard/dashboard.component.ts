import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  
})
export class DashboardComponent {
  constructor( private route: ActivatedRoute, 
    private router: Router, 
    private authService: AuthService) { }

    onNavigateToHomePage(): void {
      this.router.navigate(['home'], { relativeTo: this.route });
    }
  
    onNavigateToCursoPage(): void {
      this.router.navigate(['curso'], { relativeTo: this.route });
    }
    
    onNavigateToStatePage(): void {
      this.router.navigate(['estado'], { relativeTo: this.route });
    }

    onNavigateToPostPage(): void {
      this.router.navigate(['post'], { relativeTo: this.route });
    }
    onLogout(): void{
      //sessionStorage.clear();
      this.authService.logout();
      this.router.navigate(['login']);
    }
}
