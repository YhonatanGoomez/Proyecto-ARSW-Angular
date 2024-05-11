<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './AuthService.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true; // Permite el acceso si el usuario está autenticado
    } else {
      this.router.navigateByUrl('/inicio'); // Redirige al login si el usuario no está autenticado
      return false;
    }
  }
}


=======
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './AuthService.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService : AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true; // Permite el acceso si el usuario está autenticado
    } else {
      this.router.navigateByUrl('/inicio'); // Redirige al login si el usuario no está autenticado
      return false;
    }
  }
}


>>>>>>> d0eb95a6360c7ed55397cb842c0075a0d3fde6b0
