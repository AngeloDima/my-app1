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
  pizze: Pizza;
  nome: string;
  prezzo: number;
  ingredienti: ingrediente[];
  pizzaioli: Pizzaiolo[];

  constructor(private addPizz: AddService) { }

  createPizza(): void {
    this.addPizz.createPizza(this.nome, this.prezzo, this.ingredienti, this.pizzaioli);
    this.nome = '';
    this.prezzo = null;
    this.ingredienti = [];
    this.pizzaioli = [];
    this.pizze = this.addPizz.getPizze()[this.addPizz.getPizze().length - 1];
  }
}
