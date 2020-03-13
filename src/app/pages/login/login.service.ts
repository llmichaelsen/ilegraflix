import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private dbService: NgxIndexedDBService
  ) { }

  login(email) {

    this.dbService.getByIndex('user', 'email', email).then(
      person => {
        console.log(person);
        if (person) {
          localStorage.setItem('user', person.name);
          this.router.navigate(['/']);
        }
      },
      error => {
        console.log(error);
      }
    );


  }

  logout() {

    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getUser(): Promise<any> {

    const userName = localStorage.getItem('user');
    return this.dbService.getByIndex('user', 'name', userName);


  }

  isLogged(): boolean {

    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
