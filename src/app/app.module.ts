import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzeComponent } from './pizze/pizze.component';
import { AddPizzaComponent } from './pizze/add-pizza/add-pizza.component';
import { ListaPizzeComponent } from './pizze/lista-pizze/lista-pizze.component';
import { FormsModule } from '@angular/forms';
import { PizzaDettailComponent } from './pizze/pizza-dettail/pizza-dettail.component';
import { CartComponent } from './pizze/pizza-dettail/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzeComponent,
    AddPizzaComponent,
    ListaPizzeComponent,
    PizzaDettailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
