import { Component, Input, OnInit } from '@angular/core';
import { Navigate, Phones } from './header.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phones: Phones          = {
    allPhones: ['8 800 553 55 55', '+7 (495) 517 77 34'],
    main: '8 800 553 55 55',
    operator: '+7 (495) 517 77 34'
  };
  navigateTop: Navigate[] = [
    {
      name: 'О компании',
      selectorClass: 'black-text',
      link: {
        alias: 'about'
      }
    },
    {
      name: 'Доставка/Оплата',
      selectorClass: 'black-text',
      link: {
        alias: 'catalog_category_f1',
        option: {
          category: 'lustri',
          f1: 'vileberries'
        }
      }
    },
    {
      name: 'Распродажа',
      selectorClass: 'green-text',
      link: {
        alias: 'catalog_category_f1',
        option: {
          category: 'lustri',
          f1: 'maytoni'
        }
      }
    },
    {
      name: 'Блог',
      selectorClass: 'black-text',
      link: {
        alias: 'catalog_category',
        option: {
          category: 'lustri'
        }
      }
    },
    {
      name: 'Контакты',
      selectorClass: 'black-text',
      link: {
        alias: 'catalog',
        option: {}
      }
    }
  ];

  constructor() {
  }
  CliclActive(){
    console.log('click')
  }
  ngOnInit() {

    console.log('init')
  }
}
