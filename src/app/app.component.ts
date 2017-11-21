import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocaleService, Language } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Language() lang: string;
  frLangActivated: boolean;
  enLangActivated: boolean

  constructor (public locale: LocaleService, private router: Router) {
    this.changeLanguage(localStorage.getItem('lang'));
  }

  ngOnInit() {}

  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);

    if(localStorage.getItem('lang') === language) {
      return;
    }
    localStorage.setItem('lang', language);
    
    this.changeLanguage(language);
    
    if(this.router.url.toString().indexOf("category") != -1) {
      window.location.reload();
    } else {
      this.router.navigate([this.router.url.toString()]);
    }
  }

  private changeLanguage(language: string) {
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
