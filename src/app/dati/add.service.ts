// add.service.ts
import { Injectable } from '@angular/core';
import { Pizza, Pizzaiolo, ingrediente } from '../shared/models/pizze.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  pizze: Pizza[] = [];
  carrello: Pizza[] = []

  constructor() { }


  //creo la funzione per creare le pizze
  createPizza(nome: string, prezzo: number, ingredienti: ingrediente[], pizzaioli: Pizzaiolo[]): void {
    let pizza: Pizza = { nome, prezzo, ingredienti, pizzaioli };
    this.pizze.push(pizza);
    // console.log(this.pizze);
  }

  //riempio il contenitore pizze
  getPizze(): Pizza[] {
    return this.pizze;
  }




  //cerco la pizza per nome
  getByNome(nome: string): Observable<Pizza> {
    const pizza = this.pizze.find(pizza => pizza.nome === nome);
    if (pizza) {
      return of(pizza);
    } else {
      return new Observable(observer => {
        observer.error('Pizza non trovata');
        observer.complete();
      });
    }
  }




  addToCart(pizza: Pizza): void {
    this.carrello.push(pizza)
  }

  getCart(): Pizza[] {
    return this.carrello
  }



}



