import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ScheduleAPIService } from './schedule-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { MasterModule } from './components/master/master.module';
import { Error404Component } from './components/error404/error404.component';
import { DialogsModule } from './components/dialogs/dialogs.module';

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    HttpClientInMemoryWebApiModule.forRoot(ScheduleAPIService),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    MasterModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
