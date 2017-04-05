import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'mdb-sidenav',
  templateUrl: './mdb-sidenav.component.html',
  styleUrls: ['./mdb-sidenav.component.scss'],
  animations: [
    trigger('sidenavState', [
      state('open', style({
        display: 'block'
      })),
      state('close', style({}))
    ]),
    trigger('sidenavCloseState', [
      state('open', style({
        opacity: 1
      })),
      state('close', style({
        opacity: 0
      })),
      transition('close => open', animate(350, keyframes([
        style({opacity: 0, offset: 0.4}),
        style({opacity: 1, offset: 1.0}),
      ]))),
      transition('open => close', animate('200ms ease-out'))
    ]),
    trigger('sidenavContentState', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('close', style({
        transform: 'translateX(-100%)'
      })),
      transition('close => open', animate('250ms cubic-bezier(0.79, 0, 0.4, 0.82)')),
      transition('open => close', animate('150ms ease-out'))
    ])
  ]
})
export class MdbSidenavComponent {
  sidenavState: any = {
    main: 'close',
    content: 'close',
    close: 'close'
  };
  constructor() { }
  sidenavOpen() {
    if(this.sidenavState.main == 'open') {
      this.sidenavState.content = 'close';
      this.sidenavState.close = 'close';
      document.getElementsByTagName('body')[0].style.width = '';
      document.getElementsByTagName('body')[0].style.overflow = '';
      setTimeout(() => this.sidenavState.main = 'close', 250);
    } else {
      this.sidenavState.content = 'open';
      this.sidenavState.close = 'open';
      this.sidenavState.main = 'open';
      document.getElementsByTagName('body')[0].style.width = document.documentElement.clientWidth + 'px';
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }
}
