import { TestBed, async, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';
import { Injector } from '@angular/core';
import { dbConfig } from './data/dbIndexed';

describe('AppComponent', () => {

  let service: NgxIndexedDBService = null;

  let injector: Injector;
  let cookieService: NgxIndexedDBService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxIndexedDBModule.forRoot(dbConfig)],
      declarations: [AppComponent],
      providers: [NgxIndexedDBService]
    }).compileComponents();
    
  }));

  beforeEach(() => {
    service = TestBed.get(NgxIndexedDBService);
  });

  it('should create the app', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

  });


});
