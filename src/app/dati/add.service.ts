// add.service.ts
import { Injectable } from '@angular/core';
import { Pizza, Pizzaiolo, ingrediente } from '../shared/models/pizze.models';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  pizze: Pizza[] = [];

  constructor() { }

  createPizza(nome: string, prezzo: number, ingredienti: ingrediente[], pizzaiolo: Pizzaiolo[]): void {
    const pizza: Pizza = { nome, prezzo, ingredienti, pizzaiolo };
    this.pizze.push(pizza);
    console.log(this.pizze);
  }

  getPizze(): Pizza[] {
    return this.pizze;
  }
}
