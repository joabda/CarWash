import { Component, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { HomeJSON } from 'src/app/interfaces/json/home';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy{

  server = environment.server
  text: HomeJSON = {
    answer: "HOME.answer",
    caption: "HOME.caption",
    column1: [
      {
        title: "HOME.column1.eco.title",
        details: "HOME.column1.eco.details",
        iconSource: `${this.server}/img/icons/eco.png`
      },
      {
        title: "HOME.column1.experimental.title",
        details: "HOME.column1.experimental.details",
        iconSource: `${this.server}/img/icons/experimental.png`
      },
      {
        title: "HOME.column1.relaxing.title",
        details: "HOME.column1.relaxing.details",
        iconSource: `${this.server}/img/icons/relax.png`
      }
    ],
    column2: [
      {
        title: "HOME.column2.beloved.title",
        details: "HOME.column2.beloved.details",
        iconSource: `${this.server}/img/icons/heart.png`
      },
      {
        title: "HOME.column2.rapid.title",
        details: "HOME.column2.rapid.details",
        iconSource: `${this.server}/img/icons/fast.png`
      },
      {
        title: "HOME.column2.magical.title",
        details: "HOME.column2.magical.details",
        iconSource: `${this.server}/img/icons/magic.png`
      }
    ],
    contentIntro: [
      "HOME.contentIntro.qc",
      "HOME.contentIntro.local",
      "HOME.contentIntro.small"
    ],
    contentQuestion: "HOME.contentQuestion",
    home: [
      {
      title: "HOME.home.water.title",
      details : "HOME.home.water.details",
      iconSource: `${this.server}/img/icons/water.png`
      },
      {
      title: "HOME.home.pollution.title",
      details : "HOME.home.pollution.details",
      iconSource: `${this.server}/img/icons/pollution.png`
      },
      {
      title: "HOME.home.scratches.title",
      details : "HOME.home.scratches.details",
      iconSource: `${this.server}/img/icons/paint.png`
      }
    ],
    question: "HOME.question",
    reasons: [
      "HOME.reasons.support",
      "HOME.reasons.local",
      "HOME.reasons.enviromental"
    ],
    sameHome: "HOME.sameHome",
    sameHomeCaption: "HOME.sameHomeCaption",
    you: "HOME.you"
  }
  private mainNav;

  constructor() {}

  ngAfterViewInit(): void {
    this.mainNav = document.getElementById('main-nav');
    if (this.mainNav !== null) {
      this.mainNav.style.backgroundColor = 'transparent';
    }
  }

  ngOnDestroy(): void {
    if (this.mainNav !== null) {
      this.mainNav.style.backgroundColor = '#FFFFFF';
    }
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: Event) {
    const missionSection = document.getElementById('next');
    if (missionSection !== null) {
      if (missionSection.getBoundingClientRect().top < 670) {
        this.mainNav.style.backgroundColor = '#FFFFFF';
      } else {
        this.mainNav.style.backgroundColor = 'transparent';
      }
    }
  }
}
