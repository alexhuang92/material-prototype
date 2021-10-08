import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormsDataSource } from '../forms-data-source';
import { FormSearchRequest } from '../models/form-search-request.model';
import { FormSearchResult } from '../models/form-search-result.model';
import { FormListDatasourceService } from '../services/form-list-datasource.service';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss'],
})
export class AllFormsComponent implements OnInit {
  public dataSource!: FormsDataSource;

  constructor(private formListDatasourceService: FormListDatasourceService) {}

  ngOnInit(): void {
    this.dataSource = this.formListDatasourceService.allFormsDataSource;
  }
}
