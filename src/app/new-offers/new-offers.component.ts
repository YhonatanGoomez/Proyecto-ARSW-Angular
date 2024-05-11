import { Component } from '@angular/core';
import { SocketService } from '../conexion';
@Component({
  selector: 'app-new-offers',
  templateUrl: './new-offers.component.html',
  styleUrls: ['./new-offers.component.css']
})
export class NewOffersComponent {
  id : any = ''
  nombre : any = ''
  direccion : any = ''

  constructor(private socket : SocketService) {
    
  }
  insertPetition(){
    this.socket.newRequest(this.nombre, this.direccion, "En curso")
    console.log("Entra")
  }

}
