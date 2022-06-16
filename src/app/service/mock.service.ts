import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor() { }

  getGifts(): Observable<any[]> {
    return of([
      {
        id: 1,
        marque: 'GIORGIO ARMANI',
        libelle: 'Sì Limited Edition Edp Vaporisateur Giorgio Armani',
        stock: 2,
        description: "Sì Limited Edition Edp Vaporisateur Giorgio Armani 150 ml",
        nbPoints: 320,
        categorie: "parfum",
        image: 'armani.jpg',
        imageDetail: [
          'armani1.jpg', 'armani2.jpg'
        ]
      },
      {
        id: 2,
        marque: 'LANCÔME',
        libelle: 'Oui La Vie est Belle',
        stock: 3,
        description: "Avec la nouvelle Eau de Parfum d'Exception Oui La Vie Est Belle, Lancôme fait résonner une nouvelle déclaration de bonheur, résolument positive et optimiste",
        nbPoints: 450,
        categorie: "parfum",
        image: 'lancome.jpg',
        imageDetail: [
          'armani1.jpg', 'armani2.jpg'
        ]
      },
      {
        id: 3,
        marque: 'CHANEL',
        libelle: 'CHANCE EAU FRAÎCHE',
        stock: 3,
        description: "Une fragrance fleurie et pétillante dans un flacon aux lignes rondes. Un souffle d'énergie qui vous entraîne dans son tourbillon de bonheur et de fantaisie.",
        nbPoints: 580,
        categorie: "parfum",
        image: 'chanel.jpg',
        imageDetail: [
          'armani1.jpg', 'armani2.jpg'
        ]
      },
      {
        id: 4,
        marque: 'NOCIBÉ',
        libelle: 'NOCIBE X GENTILE CATONE BIG BRONZER',
        stock: 4,
        description: "Cette édition limitée a été conçue en collaboration avec la maison de couture italienne GENTILE CATONE",
        nbPoints: 220,
        categorie: "maquiallage",
        image: 'nocibe.jpg',
        imageDetail: [
          'armani1.jpg', 'armani2.jpg'
        ]
      },
      {
        id: 5,
        marque: 'SISLEY',
        libelle: 'Ombre Eclat Liquide',
        stock: 5,
        description: "Voile de couleur ultra lumineux, fraîcheur et longue tenue",
        nbPoints: 160,
        categorie: "maquiallage",
        image: 'sisley.jpg',
        imageDetail: [
          'armani1.jpg', 'armani2.jpg'
        ]
      },
      {
        id: 6,
        marque: 'CLARINS',
        libelle: 'Déodorant Multi-Soin Roll-on',
        stock: 4,
        description: "Antiperspirant & Déodorant. Ce déodorant sans alcool délicatement parfumé, formulé à partir d'extraits de feuille de buchu, d'hamamélis et de romarin, aide à réguler la transpiration pour laisser une agréable sensation sèche et fraîche.",
        nbPoints: 80,
        categorie: "soin",
        image: 'clarins.jpg',
        imageDetail: [
          'armani1.jpg', 'armani2.jpg'
        ]
      },
      {
        id: 7,
        marque: 'DERMA COSMETICS',
        libelle: 'FIRMING & LIFTING L-Carnosine Anti-A.G.E. Body Cre',
        stock: 3,
        description: "La Crème Corps L-Carnosine Anti-A.G.E. DERMA COSMETICS utilise la L-Carnosine, un ingrédient actif unique, qui permet de prévenir la glycation des cellules et d’ainsi ralentir le processus de vieillissement de la peau.",
        nbPoints: 100,
        categorie: "soin",
        image: 'derma.jpg',
        imageDetail: [
          'armani1.jpg', 'armani2.jpg'
        ]

      }
    ]);
  }

  getCategories(): Observable<any[]> {
    return of([
      {
        id: 1,
        libelle: 'PARFUM',
        image: 'parfum.png'
      },
      {
        id: 2,
        libelle: 'MAQUIALLAGE',
        image: 'maquiallage.png'
      },
      {
        id: 3,
        libelle: 'SOIN',
        image: 'soin.png',
      },
      {
        id: 4,
        libelle: 'AUTRE',
        image: 'autre.png',
      }
    ])
  }

}
