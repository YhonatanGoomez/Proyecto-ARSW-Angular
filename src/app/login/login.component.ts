import { Component } from '@angular/core';
import { AuthService } from './AuthService.component';
import { Router } from '@angular/router';
import { SocketService } from '../conexion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: any = "";
  username!: string;
  password!: string;
  tipo!: string;
  loginError: boolean = false;

  constructor(private router : Router, private authService: AuthService, private socket: SocketService) { }

  redirectToInicio() {
    if (this.authService.login(this.username, this.password, this.tipo)) {
      this.socket.setname(this.name)
      this.socket.setRol(this.tipo)
      if (this.tipo === 'usuario'){

        this.router.navigate(['/inicio'], { replaceUrl: true });
         // Redirige a la página de inicio y reemplaza la URL en el historial
      }
      else if (this.tipo === 'reciclador'){
        this.router.navigate(['/inicio'], { replaceUrl: true }); // Redirige a la página de inicio y reemplaza la URL en el historial
      }
    } else {
      this.loginError = true;
    }
  }
}
