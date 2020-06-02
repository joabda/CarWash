import { Component } from '@angular/core';

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
      iconSrc: '../../assets/img/socials/facebook.png',
      title: 'Facebook'
    },
    {
      link: 'instagram.com/',
      iconSrc: '../../assets/img/socials/instagram.png',
      title: 'Instagram'
    },
    {
      link: 'instagram.com/',
      iconSrc: '../../assets/img/socials/messenger.png',
      title: 'Messenger'
    },
    {
      link: 'instagram.com/',
      iconSrc: '../../assets/img/socials/whatsapp.png',
      title: 'Whatsapp'
    }
  ]

  constructor() { }

}
