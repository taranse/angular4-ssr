import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
//import { Banners } from './banners';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
  //TODO interface banners
  banners: any         = {
    row: [
      {img: 'banner-big-1.jpg', width: {big: 100, sm: 100, xs: 100}},
      {img: 'banner-small-1.jpg', width: {big: 33, sm: 50, xs: 100}},
      {img: 'banner-small-2.jpg', width: {big: 33, sm: 50, xs: 100}},
      {img: 'banner-small-3.jpg', width: {big: 33, sm: 50, xs: 100}}
    ],
    column: {
      big: [
        {img: 'banner-medium-1.jpg', width: {big: 66, sm: 50, xs: 100}}
      ],
      small: [
        {img: 'banner-small-4.jpg', width: {big: 100, sm: 50, xs: 100}},
        {img: 'banner-small-5.jpg', width: {big: 100, sm: 50, xs: 100}}
      ]
    }
  };
  bannersRow: string[] = Object.keys(this.banners);

  constructor(private image: ImageService) { }

  ngOnInit() {
  }

}
