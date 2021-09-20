import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public showFiller = false;
  public isScreenLarge: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.showFiller = false;
    this.isScreenLarge = true;
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe((status: BreakpointState) => {
        this.isScreenLarge = false;
      });
  }
}
