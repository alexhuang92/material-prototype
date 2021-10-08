import { Injectable } from '@angular/core';
import { FormsDataSource } from '../forms-data-source';
import { FormSearchService } from './form-search.service';

@Injectable({
  providedIn: 'root',
})
export class FormListDatasourceService {
  allFormsDataSource: FormsDataSource;
  myFormsDataSource: FormsDataSource;

  constructor(private formSearchService: FormSearchService) {
    this.allFormsDataSource = new FormsDataSource(this.formSearchService);
    this.myFormsDataSource = new FormsDataSource(this.formSearchService);
  }
}
