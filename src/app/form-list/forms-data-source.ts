import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SearchedForm } from '../core/models/searched-form.model';
import { FormSearchRequest } from './models/form-search-request.model';
import { FormSearchResponse } from './models/form-search-response.model';
import { FormSearchResult } from './models/form-search-result.model';
import { FormSearchService } from './services/form-search.service';

export class FormsDataSource implements DataSource<FormSearchResult> {
  private formsSubject = new BehaviorSubject<FormSearchResult[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private formSearchService: FormSearchService) {}

  connect(
    collectionViewer: CollectionViewer
  ): Observable<readonly FormSearchResult[]> {
    return this.formsSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.formsSubject.complete();
    this.loadingSubject.complete();
  }

  loadData(
    filter: string,
    sortDirection: string = 'asc',
    pageIndex: number = 0,
    pageSize: number = 10
  ) {
    console.log(
      '[forms-data-source]: load data: ' + ' searchFilter: ' + filter,
      sortDirection + ' pageIndex: ' + pageIndex + ' pageSize: ' + pageSize
    );

    this.formSearchService
      .search(1, filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((forms) => this.formsSubject.next(forms));

    // count from response header
    return 120;
  }

  loadDataViaPost(
    searchedForm: SearchedForm,
    sort: string = 'formTitle',
    order: string = 'asc',
    pageIndex: number = 0,
    pageSize: number = 10
  ) {
    let formSearchRequest: FormSearchRequest = {
      queryText: searchedForm.searchQueryText,
      sort: sort,
      order: order,
      pageIndex: pageIndex,
      pageSize: pageSize,
    };

    this.formSearchService
      .postSearch(formSearchRequest)
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe((formSearchResponse) => {
        this.formsSubject.next(formSearchResponse.results);
      });

    // count from response header
    return 120;
  }
}
