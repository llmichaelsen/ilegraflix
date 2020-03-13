import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.scss']
})
export class PlayMovieComponent implements OnInit {

  constructor(
    private loginServ: LoginService,
    private dbService: NgxIndexedDBService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.loginServ.getUser().then(
      user => this.increaseMovieWatched(user),
      error => console.log(error)
    );
  }

  increaseMovieWatched(user) {
    this.dbService.add('movie-watched', {user: user.id, movie: parseInt(this.route.snapshot.paramMap.get('id'), 10) });
  }

  back() {
    window.history.back();
  }

}
