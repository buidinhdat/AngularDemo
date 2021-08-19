import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanLyAccountComponentComponent } from './Views/quan-ly-account-component/quan-ly-account-component.component';
import { DataTablesModule } from "angular-datatables";



import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Views/home/home.component';
import { TestDirective } from './Directives/test.directive';





@NgModule({
  declarations: [
    AppComponent,
    QuanLyAccountComponentComponent,
    HomeComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    TableModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
