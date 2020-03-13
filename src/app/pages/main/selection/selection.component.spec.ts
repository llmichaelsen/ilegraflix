import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionComponent } from './selection.component';
import { MovieListComponent } from '../../../components/movie-list/movie-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { dbConfig } from '../../../data/dbIndexed';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxIndexedDBModule.forRoot(dbConfig)],
      declarations: [ SelectionComponent, MovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
