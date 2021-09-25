import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchedForm } from 'src/app/core/models/form-searched.model';
import { ApplicationEventService } from 'src/app/core/services/application-event.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor(private applicationEventService: ApplicationEventService) {}

  private eventSubscription!: Subscription;
  private formSearchedSubscription!: Subscription;
  ngOnInit(): void {
    console.log('[search-bar-component]: search bar component initialized.');

    this.eventSubscription =
      this.applicationEventService.eventChanged$.subscribe((evt) => {
        console.log('[search-bar-component]: event type received: ' + evt);
      });

    this.formSearchedSubscription =
      this.applicationEventService.formSearched$.subscribe((evt) => {
        console.log('[saerch-bar-component]: form-searched event received.');
        this.searchInProgress = false;
      });
  }

  private searchInProgress: boolean = false;
  private searchForForm(searchQueryText: string) {
    console.log('[search-bar-component]: performing search');
    this.searchInProgress = true;

    let model: SearchedForm = {
      searchQueryText: searchQueryText,
    };

    this.applicationEventService.formSearched(model);
  }

  onClick(searchText: string): void {
    console.log('click event happened');
    if (!this.searchInProgress) {
      this.searchForForm(searchText);
    }
  }

  onEnter(searchText: string): void {
    console.log('enter key entered');
    if (!this.searchInProgress) {
      this.searchForForm(searchText);
    }
  }

  ngOnDestroy(): void {
    console.log('[search-bar-component]: destroying');
    this.formSearchedSubscription?.unsubscribe();
    this.eventSubscription?.unsubscribe();
  }
}
