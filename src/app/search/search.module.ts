import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, SharedModule],
  exports: [SearchBarComponent],
})
export class SearchModule {}
