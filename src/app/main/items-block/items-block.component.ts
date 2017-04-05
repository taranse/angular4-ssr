import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-block',
  templateUrl: './items-block.component.html',
  styleUrls: ['./items-block.component.scss']
})
export class ItemsBlockComponent implements OnInit {
  @Input() id;
  constructor() { }

  ngOnInit() {
  }

}
