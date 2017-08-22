import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Card } from '../classes/Card';
import { Category } from '../enums/category';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards: Card[] = [
      {
        id: 0,
        text: 'Given road head',
        categories: Category.Sex | Category.Illegal
      },
      {
        id: 1,
        text: 'Had a crush on someone',
        categories: Category.Casual
      },
      {
        id: 2,
        text: 'Smoked weed',
        categories: Category.Illegal
      },
      {
        id: 3,
        text: 'Sent an embarrassing text to the wrong person',
        categories: Category.Casual
      },

      {
        id: 4,
        text: 'Been attracted to a friend\'s parent',
        categories: Category.Casual
      },

      {
        id: 5,
        text: 'Accidentally butt-called someone',
        categories: Category.Casual
      },

      {
        id: 6,
        text: 'Attended a music festival',
        categories: Category.Casual
      },

      {
        id: 7,
        text: 'Made a prank call to someone',
        categories: Category.Casual
      },

      {
        id: 8,
        text: 'Ruined someone else\'s vacation',
        categories: Category.Casual
      },

      {
        id: 9,
        text: 'Been arrested',
        categories: Category.Casual
      },

      {
        id: 10,
        text: 'Burnt an ant with a magnifying glass',
        categories: Category.Casual
      },

      {
        id: 11,
        text: 'Played a roleplaying game',
        categories: Category.Casual
      },

      {
        id: 12,
        text: 'Laughed at a funeral',
        categories: Category.Casual
      },

      {
        id: 13,
        text: 'Cried to a Pixar movie',
        categories: Category.Casual
      },
      {
        id: 14,
        text: 'Watched a horror movie on a date',
        categories: Category.Casual
      },
      {
        id: 15,
        text: 'Dated someone that was more than 10 years younger',
        categories: Category.Casual
      },
      {
        id: 16,
        text: 'Killed a spider',
        categories: Category.Casual
      },
      {
        id: 17,
        text: 'Traveled by airplane',
        categories: Category.Casual
      },
      {
        id: 18,
        text: 'Watched Game of Thrones',
        categories: Category.Casual
      },
      {
        id: 19,
        text: 'Walked for 6 hours',
        categories: Category.Casual
      },
      {
        id: 20,
        text: 'Practiced kissing in front of the mirror ',
        categories: Category.Casual
      },

      {
        id: 21,
        text: 'Shoplifted',
        categories: Category.Illegal
      },

      {
        id: 22,
        text: 'Driven a car under the influence',
        categories: Category.Illegal
      },
      {
        id: 23,
        text: 'Tried psychadelics',
        categories: Category.Illegal
      },
      {
        id: 24,
        text: 'Stolen a car',
        categories: Category.Illegal
      },
      {
        id: 25,
        text: 'Lied in court',
        categories: Category.Illegal
      },
      {
        id: 26,
        text: 'Broken into a house',
        categories: Category.Illegal
      },
      {
        id: 27,
        text: 'Had sex outside',
        categories: Category.Sex
      },
      {
        id: 28,
        text: 'Had a threesome',
        categories: Category.Sex
      },

      {
        id: 29,
        text: 'Joined the mile-high club',
        categories: Category.Sex
      },
      {
        id: 30,
        text: 'Masturbated',
        categories: Category.Sex
      },
      {
        id: 31,
        text: 'Used sex toys',
        categories: Category.Sex
      },
      {
        id: 32,
        text: 'Given someone a blow job',
        categories: Category.Sex
      },
      {
        id: 33,
        text: 'Had sex with a friend\'s parent',
        categories: Category.Sex | Category.Advanced
      },
      {
        id: 34,
        text: 'Had sex with a friend\'s sibling',
        categories: Category.Sex
      },
      {
        id: 35,
        text: 'Watched porn',
        categories: Category.Sex
      },
      {
        id: 36,
        text: 'Tried anal sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 37,
        text: 'Tied someone using a rope during sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 38,
        text: 'Had sex with someone from the same sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 39,
        text: 'Watched gay porn',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 40,
        text: 'Been into petplay',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 41,
        text: 'Had sex in public',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 42,
        text: 'Engaged in an orgie',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 43,
        text: 'Whipped someone during sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 44,
        text: 'Inflicted pain on someone during sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 45,
        text: 'Wanted to be whipped during sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 46,
        text: 'Used a butt plug',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 47,
        text: 'Been dominated during sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 48,
        text: 'Attended a swinger party',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 49,
        text: 'Exchanged partner during sex',
        categories: Category.Advanced | Category.Sex
      },
      {
        id: 50,
        text: 'Begged for sex from a stranger',
        categories: Category.Advanced | Category.Sex
      }
    ];
    return { cards };
  }
}
