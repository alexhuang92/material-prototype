import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormViewComponent } from './form-view.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormViewComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class FormViewRoutingModule {}
