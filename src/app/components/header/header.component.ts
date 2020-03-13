import { Component, OnInit } from '@angular/core';
import noUiSlider from 'nouislider';
import { LoginService } from '../../pages/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  name;

  constructor(
    private loginServ: LoginService
  ) { }

  ngOnInit() {
    this.name = localStorage.getItem('user');
  }

  logout() {
    this.loginServ.logout();
  }

}
