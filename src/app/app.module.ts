import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';

//Crear un nuevo modulo de contador  ContadorModule
//declaraciones, y exportaciones

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
