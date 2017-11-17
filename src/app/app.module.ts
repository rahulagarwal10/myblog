import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MidComponent } from './mid/mid.component';
import { CategoryComponent } from './mid/category/category.component';
import { AddComponent } from './mid/add/add.component';
import { DispalyComponent } from './mid/dispaly/dispaly.component';
import {BlogserviceyService} from "./blogservicey.service"
import {HttpModule} from "@angular/http"
import {FormsModule} from "@angular/forms";
import { StarratingComponent } from './mid/starrating/starrating.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MidComponent,
    CategoryComponent,
    AddComponent,
    DispalyComponent,
    StarratingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BlogserviceyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
