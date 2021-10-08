import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { merge, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormViewOverlayEvent } from 'src/app/form-view/models/form-view-overlay-event.model';
import { FormViewOverlayService } from 'src/app/form-view/services/form-view-overlay.service';
import { ApplicationEventService } from '../../core/services/application-event.service';
import { FormsDataSource } from '.././forms-data-source';
import { FormSearchResult } from '.././models/form-search-result.model';
import { FormSearchService } from '.././services/form-search.service';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
})
export class FormTableComponent implements AfterViewInit, OnInit, OnDestroy {
  displayedColumns = ['formId', 'formName', 'classification', 'stateCode'];
  totalFormCount: number = 0;

  @Input() dataSource!: FormsDataSource;
  @ViewChild(MatSort) sort!: MatSort;

  private sortSubscription!: Subscription;

  constructor(private formViewOverlayService: FormViewOverlayService) {}

  ngOnDestroy(): void {
    this.sortSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    console.log('form table on init');
  }

  ngAfterViewInit(): void {
    this.sortSubscription = this.sort.sortChange.subscribe((s: Sort) => {
      this.dataSource.sortData(s.active, s.direction?.toString());
    });
  }

  onRowClicked(row: FormSearchResult): void {
    this.formViewOverlayService.showFormView(row.formId);
  }

  onFormOverlayClicked(): void {}
}
