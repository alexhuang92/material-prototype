import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { StateCodePipe } from './state-code.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StateCodePipe],
  imports: [CommonModule, FormsModule, FlexLayoutModule, MaterialModule],
  exports: [FlexLayoutModule, StateCodePipe, MaterialModule],
})
export class SharedModule {}
