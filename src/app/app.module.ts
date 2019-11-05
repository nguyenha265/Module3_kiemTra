import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './book/view/view.component';
import { EditComponent } from './book/edit/edit.component';
import { DeleteComponent } from './book/delete/delete.component';
import { HomeComponent } from './book/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './book/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    HomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
