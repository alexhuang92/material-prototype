import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationEventService } from '../core/services/application-event.service';
import { FormsDataSource } from './forms-data-source';
import { FormSearchResult } from './models/form-search-result.model';
import { FormSearchService } from './services/form-search.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements AfterViewInit, OnInit {
  dataSource!: FormsDataSource;
  displayedColumns = ['formId', 'formName', 'classification', 'stateCode'];
  totalFormCount: number = 0;

  private searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private applicationEventService: ApplicationEventService,
    private formSearchService: FormSearchService
  ) {}

  ngAfterViewInit(): void {
    let sortSubscription: Subscription = this.sort.sortChange.subscribe(
      () => (this.paginator.pageIndex = 0)
    );

    let subscription: Subscription = merge(
      this.sort.sortChange,
      this.paginator.page
    )
      .pipe(tap(() => this.searchFormData()))
      .subscribe();

    let searchFormSubscription: Subscription =
      this.applicationEventService.formSearched$.subscribe((searchedForm) => {
        this.searchText = searchedForm.searchQueryText;
        this.searchFormData();
      });
  }

  ngOnInit(): void {
    this.dataSource = new FormsDataSource(this.formSearchService);
  }

  onRowClicked(row: FormSearchResult): void {
    console.log(row);
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
