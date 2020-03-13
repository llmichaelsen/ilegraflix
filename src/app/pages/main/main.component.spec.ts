import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../../components/footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { dbConfig } from '../../data/dbIndexed';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CollapseModule, NgxIndexedDBModule.forRoot(dbConfig), BrowserAnimationsModule ],
      declarations: [ MainComponent, HeaderComponent, FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
