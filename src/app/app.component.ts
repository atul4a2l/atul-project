import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks: any[];
  constructor() {
    this.navLinks = [
      {
          label: 'General',
          link: './general',
      }, {
          label: 'Other',
          link: './other',
      } 
  ];
  }

  ngOnInit() {
  }
}
