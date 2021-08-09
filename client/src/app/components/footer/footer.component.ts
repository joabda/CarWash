import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year = (new Date()).getFullYear();
  socials = [
    {
      link: 'instagram.com/',
      iconSrc: `${environment.server}/img/socials/facebook.png`,
      title: 'Facebook'
    },
    {
      link: 'instagram.com/',
      iconSrc: `${environment.server}/img/socials/instagram.png`,
      title: 'Instagram'
    },
    {
      link: 'instagram.com/',
      iconSrc: `${environment.server}/img/socials/messenger.png`,
      title: 'Messenger'
    },
    {
      link: 'instagram.com/',
      iconSrc: `${environment.server}/img/socials/whatsapp.png`,
      title: 'Whatsapp'
    }
  ]

  constructor() { }

}
