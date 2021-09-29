import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewRoutingModule } from './form-view-routing.module';
import { FormViewComponent } from './form-view.component';
import { FormViewChildComponent } from './form-view-child.component';

@NgModule({
  declarations: [
    FormViewComponent,
    FormViewChildComponent
  ],
  imports: [CommonModule, FormViewRoutingModule],
})
export class FormViewModule {}
