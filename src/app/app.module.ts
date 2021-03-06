import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './search/search.module';
import { AppRoutingModule } from './app-routing.module';

import { Overlay, OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    OverlayModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    LandingPageModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
