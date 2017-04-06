import { Component, OnInit  } from '@angular/core'
import { ReplacerService } from './services/replacer.service';
@Component({
	selector: 'demo-app',
	templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private replacer: ReplacerService) {}
  ngOnInit() {
  }
}
