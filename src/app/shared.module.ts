import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatListModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {
}
