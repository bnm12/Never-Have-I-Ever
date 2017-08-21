import { Component, OnInit } from '@angular/core';

import { Card } from '../classes/card';
import { CardService } from '../services/card.service';

@Component({
    selector: 'never-have-i-ever-app',
    templateUrl: './templates/app.component.html'
})

export class AppComponent implements OnInit {
    cards: Card[];

    constructor(private cardService: CardService) {}

    ngOnInit(): void {
      this.getCards();
    }

    getCards(): void {
      this.cardService.getCards()
                      .then((data: Card[]) => this.cards = data);
    }

    slideEvent(): void {
      console.log('slide');
    }

}
