import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMovieComponent } from './play-movie.component';
import { RouterTestingModule } from '@angular/router/testing';
import { dbConfig } from '../../data/dbIndexed';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

describe('PlayMovieComponent', () => {
  let component: PlayMovieComponent;
  let fixture: ComponentFixture<PlayMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxIndexedDBModule.forRoot(dbConfig)],
      declarations: [ PlayMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
