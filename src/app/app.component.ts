import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-material';
  public searchBarAnimationState: string = 'landing';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart => event instanceof NavigationStart
        )
      )
      .subscribe((event: NavigationStart) => {
        console.log('[app-component]: navigation occurred ' + event);
        if (event.url == '/landing-page') {
          this.searchBarAnimationState = 'landing-page';
        } else if (event.url == '/forms') {
          this.searchBarAnimationState = 'forms';
        }

        console.log(
          'new searchBarAnimationState: ' + this.searchBarAnimationState
        );
      });
  }
}
