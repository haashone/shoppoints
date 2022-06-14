import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class ProductMockService implements InMemoryDbService {

  constructor() { }
  createDb() {
    return {
      products: [
        {
          id: 1,
          libelle: 'Doe',
          stock: 'John',
          prix: 23.5,
          description: "",
          nbPoints: 15,
          categorie: ""
        },
        {
          id: 2,
          libelle: 'Doe',
          stock: 'John',
          prix: 45,
          description: "",
          nbPoints: 15,
          categorie: ""
        },
        {
          id: 3,
          libelle: 'Doe',
          stock: 'John',
          prix: 60,
          description: "",
          nbPoints: 15,
          categorie: ""
        }
      ]
    };
  }

  genId(products: any[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }

}
