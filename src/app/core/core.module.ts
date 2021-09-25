import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, CoreRoutingModule],
  exports: [HeaderComponent, CoreRoutingModule],
})
export class CoreModule {}
