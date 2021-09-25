import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListRoutingModule } from './form-list-routing.module';
import { FormListComponent } from './form-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormListComponent],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
    FormListRoutingModule,
  ],
})
export class FormListModule {}
