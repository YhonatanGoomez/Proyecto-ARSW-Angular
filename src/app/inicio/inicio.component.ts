import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SocketService } from '../conexion';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  rol:any = ""
  constructor( private router: Router, private socketService: SocketService) {}
  ngOnInit(): void {
    
      this.rol = this.socketService.getRol()
      console.log('rol: ', this.rol)
  }
  

  redirect(path:any){
    if(path == 'crear'){
      this.router.navigateByUrl('/new-offers');
    }
    else if(path == 'ofertas'){
      this.socketService.updateOffers()
      this.router.navigateByUrl('/see-offers');
    }
    else{
      this.socketService.updateOffers()
      this.router.navigateByUrl('/my-offers');
    }
  }
}
