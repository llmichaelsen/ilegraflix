import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  user;

  constructor(
    private dbService: NgxIndexedDBService,
    private loginServ: LoginService
  ) { }

  ngOnInit() {

    this.loginServ.getUser().then(
      result => this.user = result
    );
    console.log(this.user);
  }

}
