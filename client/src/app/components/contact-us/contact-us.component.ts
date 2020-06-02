import { Component, OnInit } from '@angular/core';
import * as _info from '../../../assets/data/contact-info.json'
import { ContactInfo } from 'src/app/interfaces/contact-infos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  info = (_info as any).default[0] as ContactInfo;
  constructor() { 
  }
}
