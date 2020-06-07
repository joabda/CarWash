import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/enums/language';
import { Title } from 'src/app/interfaces/title';


import * as _titles from 'src/assets/data/titles.json'
import * as _contactUs from 'src/assets/data/contact-us.json'
import * as _home from 'src/assets/data/home.json'
import { ContactUsJSON } from 'src/app/interfaces/json/contact-us';
import { HomeJSON } from 'src/app/interfaces/json/home';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  language = new BehaviorSubject(Language.EN);
  currentSections: string[];
  private titles_ = (_titles as any).default as Title[];
  private contactUs_ = (_contactUs as any).default as ContactUsJSON[];
  private home_ = (_home as any).default as HomeJSON[];

  constructor() { }

  getTitles(): string[] {
    if (this.language.value === Language.FR) {
      this.currentSections = this.titles_.map(function (title) {
        return title.fr;
      });
    } else {
      this.currentSections = this.titles_.map(function (title) {
        return title.en;
      });
    }
    return this.currentSections;
  }

  getContactUs(): ContactUsJSON {
    return this.contactUs_[this.language.value];
  }

  getHome(): HomeJSON {
    return this.home_[this.language.value];
  }
}
