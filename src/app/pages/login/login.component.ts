import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginServ: LoginService,
    private dbService: NgxIndexedDBService
  ) { }

  initForm() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    this.loginServ.login(this.loginForm.value.email);
  }


  ngOnInit() {


    this.initForm();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
  }
}
