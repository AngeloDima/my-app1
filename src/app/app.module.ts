import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzeComponent } from './pizze/pizze.component';
import { AddPizzaComponent } from './pizze/add-pizza/add-pizza.component';
import { ListaPizzeComponent } from './pizze/lista-pizze/lista-pizze.component';
import { PizzaComponent } from './pizze/lista-pizze/pizza/pizza.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PizzeComponent,
    AddPizzaComponent,
    ListaPizzeComponent,
    PizzaComponent,
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
