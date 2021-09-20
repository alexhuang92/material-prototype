import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListingAppComponent } from './listing-app.component';

@NgModule({
  declarations: [
    SidenavComponent,
    MainContentComponent,
    ToolbarComponent,
    ListingAppComponent,
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class ListingModule {}
