import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from '../conexion';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css']
})
export class MyOffersComponent {
  ofertas: any[] = [];
  private offersSub: Subscription;

  constructor(private socketService: SocketService) {
    this.offersSub = this.socketService.getMyOffersUpdateListener()
      .subscribe((offers: any[]) => {
        this.ofertas = [Object.values(offers)[0][1].data]
        console.log(this.ofertas, "mis ofertas en modulo")
      });
  }
  // consultarOferta(id:any){
  //   this.socketService.takeOffer(id)
  // }
}



