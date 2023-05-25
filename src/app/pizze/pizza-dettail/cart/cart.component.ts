import { Component } from '@angular/core';
import { AddService } from 'src/app/dati/add.service';
import { Pizza } from 'src/app/shared/models/pizze.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  carrello: Pizza[];
  //richiamo il service
  constructor(private cartServ: AddService) {
    this.carrello = [];
  }


  // riempio il contenitore carrello dal service
  ngOnInit(): void {
    this.carrello = this.cartServ.getCart();
  }
}



