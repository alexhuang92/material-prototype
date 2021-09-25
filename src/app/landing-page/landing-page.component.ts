import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApplicationEventService } from '../core/services/application-event.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private applicationEventService: ApplicationEventService
  ) {}

  private subscription!: Subscription;

  ngOnDestroy(): void {
    console.log('[landing-page-component]: ng on destroy');
    // this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.applicationEventService.formSearched$.subscribe(
      () => {
        console.log('[landing-page-component]: navigating to forms route');
        this.router.navigate(['forms']);
      }
    );
    console.log('[landing-page-component]: landing page loaded');
  }
}
