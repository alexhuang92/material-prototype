import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListRoutingModule } from './form-list-routing.module';
import { FormListComponent } from './form-list.component';

@NgModule({
  declarations: [
    FormListComponent
  ],
  imports: [CommonModule, FormListRoutingModule],
})
export class FormListModule {}
