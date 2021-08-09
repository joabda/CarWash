import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: {
    icon: string,
    title: string,
    description: string
  }[] = [
    {
      title: 'SERVICES.exterior.title',
      description: 'SERVICES.exterior.desc',
      icon: 'flaticon-car-wash-1'
    },
    {
      title: 'SERVICES.interior.title',
      description: 'SERVICES.interior.desc',
      icon: 'flaticon-car-wash'
    },
    {
      title: 'SERVICES.vacuum.title',
      description: 'SERVICES.vacuum.desc',
      icon: 'flaticon-vacuum-cleaner'
    },
    {
      title: 'SERVICES.seats.title',
      description: 'SERVICES.seats.desc',
      icon: 'flaticon-seat'
    },
    {
      title: 'SERVICES.window.title',
      description: 'SERVICES.window.desc',
      icon: 'flaticon-car-service'
    },
    {
      title: 'SERVICES.oil.title',
      description: 'SERVICES.oil.desc',
      icon: 'flaticon-car-wash'
    },
  ] 

  constructor() {
  }
}
