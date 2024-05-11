import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewOffersComponent } from './new-offers/new-offers.component';
import { SeeOffersComponent } from './see-offers/see-offers.component';
import { LoginComponent } from './login/login.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'new-offers', component: NewOffersComponent },
  { path: 'see-offers', component: SeeOffersComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NewOffersComponent,
    SeeOffersComponent,
    LoginComponent,
    MyOffersComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
