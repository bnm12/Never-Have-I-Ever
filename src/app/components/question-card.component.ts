import { Component, Input } from '@angular/core';

import { Card } from '../classes/card';
import { Category } from '../enums/category';

@Component({
  selector: 'question-card',
  templateUrl: './templates/question-card.component.html',
  styleUrls: [ './styles/question-card.component.css' ]
})

export class QuestionCardComponent {
  @Input() card: Card;

  findCategories(categoryMask: number): string[] {
    let categories = [];
    for (let i = 1; i <= categoryMask; i = (i * 2)) {
      if ((categoryMask & i) === i) {
        categories.push(Category[i].replace(/([A-Z])/g, ' $1').trim());
      }
    }

    return categories;
  }

}
