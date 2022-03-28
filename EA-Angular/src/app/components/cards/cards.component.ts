import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: ICard[] = [
    {
      imgUrl: "../../../assets/ea-tile-origin-experience-png-adapt-crop16x9-431p.png.adapt.crop16x9.431p.png",
      logoInc: "Electronic Arts Inc.",
      data: "2022-16-03",
      title: "Aggiornamento di EA eSports su Russia e Bielorussia",
      text: "Abbiamo deciso di rimuovere Russia e Bielorussia dai Paesi idonei ai nostri programmi di eSports. Uniti in solidarietà con il popolo ucraino."
    },
    
    {
      imgUrl: "../../../assets/ea-tile-origin-experience-png-adapt-crop16x9-431p.png.adapt.crop16x9.431p.png",
      logoInc: "Electronic Arts Inc.",
      data: "2022-16-03",
      title: "Aggiornamento di EA eSports su Russia e Bielorussia",
      text: "Abbiamo deciso di rimuovere Russia e Bielorussia dai Paesi idonei ai nostri programmi di eSports. Uniti in solidarietà con il popolo ucraino."
    },
    
    {
      imgUrl: "../../../assets/ea-tile-origin-experience-png-adapt-crop16x9-431p.png.adapt.crop16x9.431p.png",
      logoInc: "Electronic Arts Inc.",
      data: "2022-16-03",
      title: "Aggiornamento di EA eSports su Russia e Bielorussia",
      text: "Abbiamo deciso di rimuovere Russia e Bielorussia dai Paesi idonei ai nostri programmi di eSports. Uniti in solidarietà con il popolo ucraino."
    },
    
    {
      imgUrl: "../../../assets/ea-tile-origin-experience-png-adapt-crop16x9-431p.png.adapt.crop16x9.431p.png",
      logoInc: "Electronic Arts Inc.",
      data: "2022-16-03",
      title: "Aggiornamento di EA eSports su Russia e Bielorussia",
      text: "Abbiamo deciso di rimuovere Russia e Bielorussia dai Paesi idonei ai nostri programmi di eSports. Uniti in solidarietà con il popolo ucraino."
    },
    
    {
      imgUrl: "../../../assets/ea-tile-origin-experience-png-adapt-crop16x9-431p.png.adapt.crop16x9.431p.png",
      logoInc: "Electronic Arts Inc.",
      data: "2022-16-03",
      title: "Aggiornamento di EA eSports su Russia e Bielorussia",
      text: "Abbiamo deciso di rimuovere Russia e Bielorussia dai Paesi idonei ai nostri programmi di eSports. Uniti in solidarietà con il popolo ucraino."
    },
    
    {
      imgUrl: "../../../assets/ea-tile-origin-experience-png-adapt-crop16x9-431p.png.adapt.crop16x9.431p.png",
      logoInc: "Electronic Arts Inc.",
      data: "2022-16-03",
      title: "Aggiornamento di EA eSports su Russia e Bielorussia",
      text: "Abbiamo deciso di rimuovere Russia e Bielorussia dai Paesi idonei ai nostri programmi di eSports. Uniti in solidarietà con il popolo ucraino."
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
