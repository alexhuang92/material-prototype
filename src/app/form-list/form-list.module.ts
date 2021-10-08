import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListRoutingModule } from './form-list-routing.module';
import { FormListComponent } from './form-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AllFormsComponent } from './all-forms/all-forms.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { FormTableComponent } from './form-table/form-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    FormListComponent,
    AllFormsComponent,
    MyLibraryComponent,
    FormTableComponent,
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
    FormListRoutingModule,
  ],
})
export class FormListModule {}
