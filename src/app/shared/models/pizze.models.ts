export class Pizza {
  id?: number;
  nome: string;
  prezzo: number;
  ingredienti?: ingrediente[];
  pizzaiolo?: Pizzaiolo[];



  constructor(id: number, nome: string, prezzo: number) {
    this.id = id;
    this.nome = nome;
    this.prezzo = prezzo
  }
}


export class Pizzaiolo {
  nome: string
  regione: string
  rating: number

  constructor(nome: string, regione: string, rating: number) {
    this.nome = nome
    this.regione = regione
    this.rating = rating
  }
}

export class ingrediente {
  ingrediente: string

  constructor(ingrediente: string) {
    this.ingrediente = ingrediente
  }
}
