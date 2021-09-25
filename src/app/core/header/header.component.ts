import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('[app-header]: on init');
  }

  navigateToForms(): void {
    this.router.navigateByUrl('/forms');
  }

  onBackClick(): void {
    this.router.navigateByUrl('/landing-page');
  }

  onDashboardClick(): void {
    this.router.navigateByUrl('/forms');
  }

  onAccountClick(): void {
    this.router.navigateByUrl('/form');
  }
}
