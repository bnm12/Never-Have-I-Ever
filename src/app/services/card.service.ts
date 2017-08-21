import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Card } from '../classes/card';

@Injectable()

export class CardService {
  private cardsUrl = 'api/cards';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCards(): Promise<Card[]> {
    return this.http.get(this.cardsUrl)
              .toPromise()
              .then(response => response.json().data as Card[])
              .catch(this.handleError);
  }

  getCardsByCategory(categories: number): Promise<Card[]> {
    const url = `${this.cardsUrl}?categories=${categories}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Card[])
      .catch(this.handleError);
  }

  getCard(id: number): Promise<Card> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Card)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
