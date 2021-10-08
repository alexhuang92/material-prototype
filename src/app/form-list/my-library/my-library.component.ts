import { Component, OnInit } from '@angular/core';
import { FormsDataSource } from '../forms-data-source';
import { FormListDatasourceService } from '../services/form-list-datasource.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss'],
})
export class MyLibraryComponent implements OnInit {
  public dataSource!: FormsDataSource;

  constructor(private formListDatasourceService: FormListDatasourceService) {}

  ngOnInit(): void {
    this.dataSource = this.formListDatasourceService.myFormsDataSource;
  }
}
