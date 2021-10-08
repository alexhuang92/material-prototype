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
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { merge, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationEventService } from '../core/services/application-event.service';
import { FormViewComponent } from '../form-view/form-view.component';
import { FormViewOverlayService } from '../form-view/services/form-view-overlay.service';
import { FormsDataSource } from './forms-data-source';
import { FormSearchResult } from './models/form-search-result.model';
import { FormListDatasourceService } from './services/form-list-datasource.service';
import { FormSearchService } from './services/form-search.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements AfterViewInit, OnInit, OnDestroy {
  displayedColumns = ['formId', 'formName', 'classification', 'stateCode'];
  totalFormCount: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private sortSubscription!: Subscription;
  private paginationSubscription!: Subscription;
  private searchBarSubscription!: Subscription;

  constructor(
    private applicationEventService: ApplicationEventService,
    private formListDataSourceService: FormListDatasourceService
  ) {}

  ngOnDestroy(): void {
    this.sortSubscription?.unsubscribe();
    this.paginationSubscription?.unsubscribe();
    this.searchBarSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    // observe counts from both dataSources.

    this.applicationEventService.formSearched$.subscribe((st) => {
      const searchText = st.searchQueryText;
      this.formListDataSourceService.allFormsDataSource.loadData(
        searchText,
        'formTitle',
        'asc',
        1,
        20
      );
      this.formListDataSourceService.myFormsDataSource.loadData(
        searchText,
        'formTitle',
        'asc',
        1,
        20
      );
    });
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = 20;
    this.paginator.pageIndex = 0;
  }

  onPageChange(pageEvent: PageEvent) {
    console.log(
      `${pageEvent.length} + ${pageEvent.pageIndex} + ${pageEvent.pageSize}`
    );

    // which tab is active indicates which dataSource to page through

    this.formListDataSourceService.allFormsDataSource.pageData(
      pageEvent.pageIndex,
      pageEvent.pageSize
    );
  }

  onTabChanged(evt: MatTabChangeEvent) {
    if (evt.index == 0) {
      console.log('changed tab to all');
      /// reset mat paginator to active data source page values.
      const pageIndex =
        this.formListDataSourceService.allFormsDataSource.pageIndex;
      const totalCount =
        this.formListDataSourceService.allFormsDataSource.totalCount;

      this.resetPageIndex(pageIndex, totalCount);
    } else {
      console.log('changed tab to mine');

      /// reset mat paginator to active data source page values.
      const pageIndex =
        this.formListDataSourceService.myFormsDataSource.pageIndex;
      const totalCount =
        this.formListDataSourceService.myFormsDataSource.totalCount;

      this.resetPageIndex(pageIndex, totalCount);
    }
  }

  private resetPageIndex(pageIndex: number, totalCount: number) {
    this.paginator.pageIndex = pageIndex;
    this.paginator.length = totalCount;
  }
}
