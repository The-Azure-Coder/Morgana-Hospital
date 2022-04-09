import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logformBackground: string = 'url(https://c.neh.tw/thumb/f/720/d9e4fa3d2d564e6eaa00.jpg)'
  submitted = false
  loginForm = new FormGroup({
    'username2': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'email2': new FormControl('', [Validators.required, Validators.email]),
  })
  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
