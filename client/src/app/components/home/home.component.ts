import { Component, HostListener, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy{

  private mainNav;
  constructor() { }

  ngAfterViewInit(): void {
    this.mainNav = document.getElementById('main-nav');
    if (this.mainNav !== null) {
      this.mainNav.style.backgroundColor = 'transparent';
    }
  }

  ngOnDestroy(): void {
    // if (this.mainNav !== null) {
    //   this.mainNav.style.backgroundColor = '#323232';
    //   this.mainNav.style.opacity = '0.75';
    // }
  }

  // @HostListener('window:scroll', ['$event'])
  // scrollHandler(event: Event) {
  //   const missionSection = document.getElementById('next');
  //   if (missionSection !== null) {
  //     const about = missionSection.getBoundingClientRect();
  //     if (about.top < 200) {
  //       this.mainNav.style.backgroundColor = '#323232';
  //       this.mainNav.style.opacity = '0.75';
  //     } else {
  //       this.mainNav.style.backgroundColor = 'transparent';
  //     }
  //   }
  // }
}
