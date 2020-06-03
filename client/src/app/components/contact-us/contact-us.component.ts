import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as _info from '../../../assets/data/contact-info.json'
import { ContactInfo } from 'src/app/interfaces/contact-infos';
import { DataService } from 'src/app/services/data/data.service';
import { Language } from 'src/app/enums/language';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements AfterViewInit{

  info = (_info as any).default[0] as ContactInfo;
  text: string[];

  private quizIds = [
    "https://docs.google.com/forms/d/e/1FAIpQLSclgiErYqBrkeo4tiuxkEfWNYJbQlZKdRfbrqsk2RFzamt_PQ/viewform?embedded=true", // FR
    "https://docs.google.com/forms/d/e/1FAIpQLSdWunQHmnM61P6O6zFwgUGdaD2P9w7sCeFOf2WF0DHcSrCoDw/viewform?embedded=true"  // EN
  ]

  constructor(private data: DataService) { 
    this.text = data.getContactUs();
  }

  ngAfterViewInit(): void {
    this.data.language.subscribe( () => {
      if(this.data.language.value == Language.FR) {
        (document.getElementById('form-frame') as HTMLIFrameElement).src = this.quizIds[0];
      } else {
        (document.getElementById('form-frame') as HTMLIFrameElement).src = this.quizIds[1];
      }
    });
  }
}
