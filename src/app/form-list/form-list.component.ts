import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationEventService } from '../core/services/application-event.service';
import { FormViewComponent } from '../form-view/form-view.component';
import { FormViewOverlayService } from '../form-view/services/form-view-overlay.service';
import { FormsDataSource } from './forms-data-source';
import { FormSearchResult } from './models/form-search-result.model';
import { FormSearchService } from './services/form-search.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements AfterViewInit, OnInit, OnDestroy {
  dataSource!: FormsDataSource;
  displayedColumns = ['formId', 'formName', 'classification', 'stateCode'];
  totalFormCount: number = 0;

  private searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private sortSubscription!: Subscription;
  private paginationSubscription!: Subscription;
  private searchBarSubscription!: Subscription;

  constructor(
    private applicationEventService: ApplicationEventService,
    private formSearchService: FormSearchService,
    private formViewOverlayService: FormViewOverlayService
  ) {}

  ngOnDestroy(): void {
    this.sortSubscription?.unsubscribe();
    this.paginationSubscription?.unsubscribe();
    this.searchBarSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource = new FormsDataSource(this.formSearchService);
  }

  ngAfterViewInit(): void {
    this.sortSubscription = this.sort.sortChange.subscribe(() =>
      this.resetPageIndex()
    );

    this.paginationSubscription = merge(
      this.sort.sortChange,
      this.paginator.page
    )
      .pipe(tap(() => this.searchFormData()))
      .subscribe();

    this.searchBarSubscription =
      this.applicationEventService.formSearched$.subscribe((searchedForm) => {
        this.resetPagination();
        this.searchText = searchedForm.searchQueryText;
        this.searchFormData();
      });
  }

  onRowClicked(row: FormSearchResult): void {
    console.log(row);
  }

  onFormOverlayClicked(): void {
    this.formViewOverlayService.showFormView();
  }

  onFormSearchClicked(): void {
    this.dataSource.loadDataViaPost({ searchQueryText: 'test' });
  }

  private resetPagination() {
    this.sort.direction = 'desc';
    this.resetPageIndex();
  }

  private resetPageIndex() {
    this.paginator.pageIndex = 0;
  }

  private searchFormData() {
    this.totalFormCount = this.dataSource.loadData(
      this.searchText,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
}
