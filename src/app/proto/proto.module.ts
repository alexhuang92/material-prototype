import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtoRoutingModule } from './proto-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../shared/material.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [CommonModule, ProtoRoutingModule, MaterialModule, FlexLayoutModule],
})
export class ProtoModule {}
