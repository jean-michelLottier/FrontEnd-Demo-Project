import { Component } from '@angular/core';
import { LocaleService, Language } from 'angular-l10n'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Language() lang: string;
  frLangActivated: boolean;
  enLangActivated: boolean

  constructor (public locale: LocaleService) {
    this.frLangActivated = true;
    this.enLangActivated = false;
  }

  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);

    switch(language) {
      case 'fr': {
        this.frLangActivated = true;
        this.enLangActivated = false;
        break;
      }
      case 'en': {
        this.frLangActivated = false;
        this.enLangActivated = true;
      }
    }
  }
}
