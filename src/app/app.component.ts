import {
  Component,
  OnInit,
  Renderer,
  HostListener,
  Inject,
  Renderer2
} from '@angular/core';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { users, genres, contries } from './data/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  images = ['movie1.jpg', 'movie2.jpg', 'movie3.jpg', 'movie4.JPG', 'movie5.jpg', 'movie6.jpg'];

  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document,
    private dbService: NgxIndexedDBService
  ) { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-danger');
      }
    } else {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-danger');
      }
    }
  }

  ngOnInit() {
    this.onWindowScroll(event);
    this.loadDatabaseInfo();

  }

  loadDatabaseInfo() {

    this.dbService.getAll('user').then(
      user => {
        if (!user.length) {
          this.createUsers();
        }
      },
      error => {
        console.log(error);
      }
    );

    this.dbService.getAll('movie').then(
      movies => {

        if (!movies.length) {
          this.createMovies();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  createMovies() {
    for (let index = 0; index < 20; index++) {
      this.dbService.add('movie', this.getRandomMovie());
    }
  }

  createUsers() {
    users.forEach((user, i) => {
      this.dbService.add('user', {
        name: user.name,
        email: user.email,
        password: user.password,
        bestGenre: user.bestGenre,
        country: user.country,
        image: user.image
      });

      for (let index = 0; index < 10; index++) {
        this.dbService.add('movie-watched', { user: i + 1, movie: Math.floor(Math.random() * 20) + 1 });
      }
    });
  }

  getRandomMovie() {
    return {
      title: 'Movie ' + (Math.random() * 200).toFixed(0),
      year: Math.round(Math.random() * 100 + 1920),
      duration: Math.round(Math.random() * 150).toFixed(0),
      genre: genres[Math.floor(Math.random() * genres.length)],
      image: this.images[Math.floor(Math.random() * this.images.length)],
      country: contries[Math.floor(Math.random() * contries.length)],
    };
  }

}
