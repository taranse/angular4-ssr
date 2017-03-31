import { Component, OnInit } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
	selector: 'demo-app',
	templateUrl: 'app.component.html',
  //styleUrls: ['../styles.scss']
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) {}
  ngOnInit() {
    this.cache.set('cached', true);
  }
}
