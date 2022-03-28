import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InavElement } from 'src/models/navelement';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .custom-class {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class NavElementComponent implements OnInit {
  elements: InavElement[] = [
    {
      id: 1,
      title: 'Giochi',
      subtitle: ['ESPLORA I GIOCHI', 'PIATTAFORME'],
      element: [
        'Ultimi giochi',
        'ProssimamenteEA',
        'SPORTS',
        'Giochi gratuiti',
        'Libreria dei giochi',
        'PIATTAFORME',
      ],
    },
    {
      id: 2,
      title: 'Altre Esperienze',
      element: [
        'EA',
        'PlayOriginCompetizioni',
        'videoludicheDiretta di EA Play',
      ],
    },
    {
      id: 3,
      title: 'Informazioni',
      element: [
        'Società',
        'EA Studi',
        'La nostra tecnologia',
        'EA Partners',
        'Notizie',
        'Inside EA',
      ],
    },
    {
      id: 4,
      title: 'Impegni',
      element: [
        'Gioco positivo',
        'Diversità e inclusione',
        'Sensibilizzazione della comunità',
        'Persone e cultura',
        'Ambiente',
      ],
    },

    {
      id: 5,
      title: 'Risorse',
      element: [
        'Aiuto',
        'Forum',
        'Lavora con noi',
        'Filtro Famiglia',
        'Accessinilità',
        'Stampa',
        'Investitori',
        'Test di gioco',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
