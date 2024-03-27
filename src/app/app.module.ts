import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarJrrComponent } from './components/navbar-jrr/navbar-jrr.component';
import { RuedaJrrComponent } from './components/rueda-jrr/rueda-jrr.component';
import { TableroJrrComponent } from './components/tablero-jrr/tablero-jrr.component';
import { FicherosJrrComponent } from './components/ficheros-jrr/ficheros-jrr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJrrComponent,
    RuedaJrrComponent,
    TableroJrrComponent,
    FicherosJrrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
