import { Component, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { HomeJSON } from 'src/app/interfaces/json/home';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy{

  text: HomeJSON;
  private mainNav;

  constructor(private data: DataService) { 
    data.language.subscribe( () => this.text = data.getHome())
  }

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
