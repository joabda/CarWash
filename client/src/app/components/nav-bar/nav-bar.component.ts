import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  server = environment.server
  links = [
    {
      name: 'TITLE.home',
      href: '/'
    },
    {
      name: 'TITLE.services',
      href: '/services'
    },
    {
      name: 'TITLE.prices',
      href: '/prices'
    },
    {
      name: 'TITLE.contact',
      href: '/contact-us'
    }
  ];

  isBigScreen = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog,
    private translate: TranslateService) {
    
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 935px)'])
      .subscribe((size: BreakpointState) => {
        this.isBigScreen = size.matches;
      }
    );
  }

  switchLanguage(): void {
    console.log("Lang:", this.translate.currentLang);
    (document.getElementById("lang-img") as HTMLImageElement).src = `${environment.server}/img/language/${this.translate.currentLang}.png`;
    this.translate.use(this.translate.currentLang === "fr" ? "en" : "fr");
  }
}
