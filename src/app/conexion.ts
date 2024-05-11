import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  private offersUpdated = new Subject<any[]>();
  private myoffersUpdated = new Subject<any[]>();
  name:any = ""
  rol:any = ""

  constructor() {
    this.socket = io('http://localhost:4000');
    this.socket.on('update-offers', offers => {
      this.offersUpdated.next(offers);
      console.log('ofertas obtenidas',offers)
    });
    this.socket.on('myupdate-offers', offers => {
      let misOfertas: any = "sin ofertas";
    
      // Asegurarse de que `offers` es un objeto antes de proceder
      if (offers && typeof offers === 'object') {
        console.error('Received valid `offers`: ', offers);
        misOfertas = Object.entries(offers).filter(([key, value]) => key === this.name);
      } else {
        console.error('Received invalid `offers`: ', offers);
      }
      console.log(misOfertas, "ofertas al actualizar reciclador")
      if (this.rol == "reciclador"){
        this.myoffersUpdated.next(misOfertas);
      }
      
    });


    this.socket.on('myupdate-offers_usser', offers => {
      let misOfertas: any = "sin ofertas";
      if (offers && typeof offers === 'object') {
        console.error('Received valid `offers`: ', offers);
        misOfertas = Object.entries(offers).filter(([key, value]) => key === this.name);
      } else {
        console.error('Received invalid `offers` usuario: ', offers);
      }
      console.log(misOfertas, "ofertas al actualizar usuario")
      if (this.rol == "usuario"){
        this.myoffersUpdated.next(misOfertas);
      }
    });

  }

  getOffersUpdateListener() {
    return this.offersUpdated.asObservable();
  }
  setname(nombre:any){
    this.socket.emit('setName', nombre);
    this.name = nombre
  }
  setRol(userRol:any){
    this.rol = userRol
  }
  getRol(){
    return this.rol
  }

  getMyOffersUpdateListener() {
    return this.myoffersUpdated.asObservable();
  }

  


  // Example methods you can add to your service
  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  updateOffers(){
    this.socket.emit('updateOffers', true);
  }

  onMessage(): void {
    this.socket.on('message', (data: any) => {
      console.log(data);
    });
  }
  
  public sendOffer(offer: any) {
    this.socket.emit('new-offer', offer);
  }
  
  public getOffers(){
    this.socket.on('update-offers', offers => {
    });
  }
  public getMyOffers(){
    this.socket.on('myupdate-offers', offers => {
    });
  }

  newRequest( nombre : any, direccion : any, estado:any){
    
    this.socket.emit('new-offer', {data: [nombre,direccion,estado]})
  }

  takeOffer(id:any){
    this.socket.emit("take-offer",id)
  }

//   tomarOfertaPorId(id: number) {
//     this.socket.emit('offer-taken', id);
//   }
}
