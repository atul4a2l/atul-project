import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sortable-card',
  templateUrl: './sortable-card.component.html',
  styleUrls: ['./sortable-card.component.scss']
})
export class SortableCardComponent implements OnInit {
  @Input() data: Array<any>;
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
