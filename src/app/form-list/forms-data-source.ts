import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { SearchedForm } from '../core/models/searched-form.model';
import { FormSearchRequest } from './models/form-search-request.model';
import { FormSearchResponse } from './models/form-search-response.model';
import { FormSearchResult } from './models/form-search-result.model';
import { FormSearchService } from './services/form-search.service';

export class FormsDataSource implements DataSource<FormSearchResult> {
  private formsSubject = new BehaviorSubject<FormSearchResult[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  private searchQuery: string = '';
  private sort: string = 'formTitle';
  private order: string = 'asc';
  private _pageSize: number = 10;
  private _pageIndex: number = 1;
  private _totalCount: number = 0;

  public get totalCount(): number {
    return this._totalCount;
  }
  public get pageIndex(): number {
    return this._pageIndex;
  }

  constructor(private formSearchService: FormSearchService) {}

  connect(): Observable<readonly FormSearchResult[]> {
    return this.formsSubject.asObservable();
  }
  disconnect(): void {
    this.formsSubject.complete();
    this.loadingSubject.complete();
  }

  pageData(pageIndex: number, pageSize: number) {
    return this.loadData(
      this.searchQuery,
      this.sort,
      this.order,
      pageIndex,
      pageSize
    );
  }

  sortData(sort: string, sortDirection: string = 'asc') {
    return this.loadData(
      this.searchQuery,
      sort,
      sortDirection,
      this._pageIndex,
      this._pageSize
    );
  }

  loadData(
    filter: string,
    sortColumn: string = 'formTitle',
    sortDirection: string = 'asc',
    pageIndex: number = 0,
    pageSize: number = 10
  ) {
    console.log(
      '[forms-data-source]: load data: ' +
        ' searchFilter: ' +
        filter +
        ', sortColumn: ' +
        sortColumn +
        ', sortDirection: ' +
        sortDirection +
        ', pageIndex: ' +
        pageIndex +
        ', pageSize: ' +
        pageSize
    );

    this.searchQuery = filter;
    this.sort = sortColumn;
    this.order = sortDirection;
    this._pageIndex = pageIndex;
    this._pageSize = pageSize;

    this.formSearchService
      .search(filter, sortColumn, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        tap((forms) => (this._totalCount = forms.length)),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((forms) => this.formsSubject.next(forms));
  }
}
