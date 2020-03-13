import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user;
  lastFiveMovies = [];
  mostWatchedContry = [];
  isCollapsed = true;

  constructor(
    private loginServ: LoginService,
    private dbService: NgxIndexedDBService
  ) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');

    this.loginServ.getUser().then(
      user => this.setUser(user),
      error => console.log(error)
    );
  }

  setUser(user) {
    this.user = user;
    const movies = [];
    this.dbService.openCursor('movie-watched', (evt) => {
      const cursor = (evt.target as any).result;
      if (cursor) {
        movies.push(cursor.value);
        cursor.continue();
      } else {
        this.setLattestWhatchedUser(movies.filter(m => m.user === user.id));
        this.setMostWatchedCountry(movies);
      }
    });
  }

  setMostWatchedCountry(movies) {

    const countryMovies = [];
    this.dbService.openCursorByIndex('movie', 'country', IDBKeyRange.only(this.user.country), (evt) => {
      const cursor = (evt.target as any).result;
      if (cursor) {
        countryMovies.push(cursor.value);
        cursor.continue();
      } else {
        this.mostWatchedContry = setInfo();
      }
    });

    function setInfo() {

      countryMovies.map(el => el.timesWatched = movies.filter(w => w.movie === el.id).length);
      return countryMovies.sort((a, b) => b.timesWatched - a.timesWatched).slice(0, 3);
    }
  }

  setLattestWhatchedUser(movies) {

    const unique = movies.sort((a, b) => b.id - a.id).filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t.movie === thing.movie
      ))
    );

    unique.slice(0, 4).forEach(element => {
      this.dbService.getByKey('movie', element.movie).then(
        movie => this.lastFiveMovies.push(movie),
        error => console.log(error)
      );
    });

  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('profile-page');
  }

}
