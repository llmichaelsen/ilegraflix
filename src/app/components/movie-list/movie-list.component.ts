import { Component, OnInit, Input } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() title1: string;
  @Input() title2: string;
  @Input() genre: string;
  @Input() releases: boolean;
  @Input() random: boolean;
  @Input() color: string;

  movies = [];
  moviesToShow = [];

  constructor(
    private dbService: NgxIndexedDBService
  ) { }

  ngOnInit() {
    this.dbService.getAll('movie').then(
      movies => { this.movies = movies; this.filterMovies(); },
      error => console.log(error)
    );
  }

  filterMovies() {

    this.moviesToShow = this.movies.slice();

    if (this.genre) {
      this.moviesToShow = this.moviesToShow.filter(m => m.genre === this.genre);
    }

    if (this.releases) {
      this.moviesToShow = this.moviesToShow.sort((a, b) => b.year - a.year);
    }

    if (this.random) {
      const shuffled = this.moviesToShow.sort(() => 0.5 - Math.random());
      this.moviesToShow = shuffled.slice(0, 3);
    }

    this.moviesToShow = this.moviesToShow.slice(0, 3);
  }

}
