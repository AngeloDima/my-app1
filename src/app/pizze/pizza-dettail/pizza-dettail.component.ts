import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/dati/add.service';
import { Pizza } from 'src/app/shared/models/pizze.models';


@Component({
  selector: 'app-pizza-dettail',
  templateUrl: './pizza-dettail.component.html',
  styleUrls: ['./pizza-dettail.component.scss']
})
export class PizzaDettailComponent implements OnInit {

  dettail?: Pizza
  //richiamo il service                        e il routing
  constructor(private chiamoPizze: AddService, private route: ActivatedRoute) { }
  //routing
  ngOnInit(): void {
    let nome = this.route.snapshot.paramMap.get("nome")
    if (nome != null) {
      this.chiamoPizze.getByNome(nome).subscribe(dettail => this.dettail = dettail)
    }
  }


  //mando i dati da Sinistra al carrello
  addToCart(): void {
    if (this.dettail) {
      this.chiamoPizze.addToCart(this.dettail)
    }
  }

}



