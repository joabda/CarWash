import { Component, AfterViewInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

import * as _cars from 'src/assets/data/cars.json';
import { CarType } from 'src/app/enums/cars';
import { DataService } from 'src/app/services/data/data.service';
import { PricesJSON } from 'src/app/interfaces/json/prices';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements AfterViewInit{

  images: Image[] = (_cars as any).default as Image[];
  cars: HTMLImageElement[];
  text: PricesJSON;
  currentCar: CarType = CarType.Sedan;

  FACTORS = [1, 1.1, 1.5];

  constructor(private data: DataService) {
    data.language.subscribe( () => {
      this.text = data.getPrices();
    });
  }

  ngAfterViewInit(): void {
    this.cars= [];
    for(let i = 0; i < 4; ++i) {
      this.cars[i] = document.getElementById(`car-${i}`) as HTMLImageElement;
    }
    this.switchCar(CarType.Sedan);
  }

  switchCar(type: CarType): void {
    for(let i = 0; i < 4; ++i) {
      if(i === type) {
        this.currentCar = type;
        this.cars[i].style.border = "1px solid black";
        continue ;
      }
      this.cars[i].style.border = "none";
    }
  }
}
