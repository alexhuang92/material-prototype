import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'proto',
    loadChildren: () =>
      import('./proto/proto.module').then((m) => m.ProtoModule),
  },
  {
    path: 'listing',
    loadChildren: () =>
      import('./listing/listing.module').then((m) => m.ListingModule),
  },
  {
    path: '**',
    redirectTo: 'listing',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
