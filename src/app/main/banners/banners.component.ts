import { Component, OnInit } from '@angular/core';
//import { Banners } from './banners';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
  //TODO interface banners
  banners: any     = {
    row: [
      {img: '/src/assets/img/banner-big-1.jpg', width: 100},
      {img: './src/assets/img/banner-small-1.jpg', width: 33},
      {img: './src/assets/img/banner-small-2.jpg', width: 33},
      {img: './src/assets/img/banner-small-3.jpg', width: 33}
    ],
    column: {
      big: [
        {img: './src/assets/img/banner-medium-1.jpg', width: 66}
      ],
      small: [
        {img: './src/assets/img/banner-small-4.jpg', width: 100},
        {img: './src/assets/img/banner-small-5.jpg', width: 100}
      ]
    }
  };
  bannersRow: string[] = Object.keys(this.banners);

  constructor() { }

  ngOnInit() {
  }

}
