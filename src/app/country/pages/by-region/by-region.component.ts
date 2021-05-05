import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion = '';

  constructor() {}

  activateRegion(region: string) {
    this.activeRegion = region;

    //TODO: make service call
  }

  getClassCSS(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
