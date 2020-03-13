import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

import { PagesModule } from './pages/pages.module';

import { HeaderComponent } from './components/header/header.component';
import { MainModule } from './pages/main/main.module';
import { ComponentsModule } from './components/components.module';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'user',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } },
      { name: 'password', keypath: 'password', options: { unique: false } },
      { name: 'bestGenre', keypath: 'bestGenre', options: { unique: false } },
      { name: 'country', keypath: 'country', options: { unique: false } },
      { name: 'image', keypath: 'image', options: { unique: false } },
    ]
  },
  {
    store: 'movie',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'title', options: { unique: false } },
      { name: 'duration', keypath: 'duration', options: { unique: false } },
      { name: 'genre', keypath: 'genre', options: { unique: false } },
      { name: 'image', keypath: 'image', options: { unique: false } },
      { name: 'year', keypath: 'year', options: { unique: false } },
      { name: 'country', keypath: 'country', options: { unique: false } },
    ]
  },
  {
    store: 'movie-watched',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'user', keypath: 'user', options: { unique: false } },
      { name: 'movie', keypath: 'movie', options: { unique: false } }
    ]
  },
  ]
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxIndexedDBModule.forRoot(dbConfig),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    PagesModule,
    MainModule,
    ComponentsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
