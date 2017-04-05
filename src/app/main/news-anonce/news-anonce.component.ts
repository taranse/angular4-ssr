import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-anonce',
  templateUrl: './news-anonce.component.html',
  styleUrls: ['./news-anonce.component.scss']
})
export class NewsAnonceComponent implements OnInit {

  @Input('list') list;
  constructor() { }

  ngOnInit() {
  }

}
