import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor( private router: Router,private authService: AuthService ) { }

  onSubmit(userEmailInput: HTMLInputElement, userPasswordInput: HTMLInputElement): void {
    //console.log('AuthService::loging', userEmailInput, userPasswordInput);
    //sessionStorage.setItem('isLogged', 'true');
    this.authService.loging(userEmailInput.value, userPasswordInput.value);
    this.router.navigateByUrl("/dashboard");
  }
}
