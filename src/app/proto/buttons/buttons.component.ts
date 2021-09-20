import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
      <mat-icon>face</mat-icon>
      Click Me!!!
    </button>
    <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: [],
})
export class ButtonsComponent implements OnInit {
  test: string;
  constructor() {
    this.test = '2';
  }

  ngOnInit(): void {
    this.test = '2';
  }
}
