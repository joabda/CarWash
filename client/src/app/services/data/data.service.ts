import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/enums/language';
import { Title } from 'src/app/interfaces/title';


import * as _titles from 'src/assets/data/titles.json'
import * as _contactUs from 'src/assets/data/contact-us.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  language = new BehaviorSubject(Language.EN);
  currentSections: string[];
  private titles_ = (_titles as any).default as Title[];
  private contactUs = (_contactUs as any).default as Title[];
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

  getContactUs(): string[] {
    return [];
  }
}
