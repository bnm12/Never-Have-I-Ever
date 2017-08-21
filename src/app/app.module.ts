import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CardService } from './services/card.service';
import { AppComponent }         from './components/app.component';
import { QuestionCardComponent } from './components/question-card.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-cards.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    QuestionCardComponent
  ],
  providers: [ CardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
