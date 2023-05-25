import { Component } from '@angular/core';
import { AddService } from 'src/app/dati/add.service';
import { Pizza } from 'src/app/shared/models/pizze.models';

@Component({
  selector: 'app-lista-pizze',
  templateUrl: './lista-pizze.component.html',
  styleUrls: ['./lista-pizze.component.scss']
})
export class ListaPizzeComponent {

  pizze: Pizza[]

  constructor(private chiamoPizze: AddService) {
    this.pizze = this.chiamoPizze.getPizze();
  }
}


