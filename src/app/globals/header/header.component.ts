import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { Navigate, Phones } from './header.interface';
import { MdbSidenavComponent } from '../../materials-bclight';
import { ReplacerService } from '../../services/replacer.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav: MdbSidenavComponent;
  constructor(private replacer: ReplacerService) {}
  isActive = false;
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
        alias: 'lazy',
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
        alias: '/#main',
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
        alias: 'about',
        option: {
          category: 'lustri'
        }
      }
    },
    {
      name: 'Контакты',
      selectorClass: 'black-text',
      link: {
        alias: '',
        option: {}
      }
    }
  ];

  sidenavOpen() {
    this.sidenav.sidenavOpen();
  }
  CliclActive() {}
}
