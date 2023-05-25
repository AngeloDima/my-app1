// add-pizza.component.ts
import { Component } from '@angular/core';
import { AddService } from 'src/app/dati/add.service';
import { ingrediente, Pizza, Pizzaiolo } from 'src/app/shared/models/pizze.models';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss']
})

export class AddPizzaComponent {
  //contenitore
  pizze: Pizza[];

  //var ngModel
  nome: string;
  prezzo: number;
  ingredienti: ingrediente[];
  pizzaioli: Pizzaiolo[];

  //chiamo il service
  constructor(private addService: AddService) { }

  //passo i parametri
  onCreatePizza() {

    //paramentri
    this.addService.createPizza(this.nome, this.prezzo, this.ingredienti, this.pizzaioli);

    //richiamo le var con gli ngModel
    this.nome = '';
    this.prezzo = null;
    this.ingredienti = [];
    this.pizzaioli = [];

    //riempio il contenitore pizze
    this.pizze = this.addService.getPizze();
  }
}
