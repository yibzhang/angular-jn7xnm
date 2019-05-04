import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { UsersComponent } from './users/users.component';

const appRoutes : Routes = [
  {path:'', component:UsersComponent}
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  HttpClientModule,
                  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
                  RouterModule.forRoot(appRoutes)
                ],
  declarations: [ AppComponent, UsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDataService]
})
export class AppModule { }
