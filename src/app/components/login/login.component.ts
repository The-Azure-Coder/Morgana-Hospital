import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<any>();

  logformBackground: string = 'url(https://c.neh.tw/thumb/f/720/d9e4fa3d2d564e6eaa00.jpg)'
  submitted = false
  loginForm = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
  })
  constructor(private http: HttpClient, private router: Router) { }

  logIn() {


    this.submitted = true;
    this.http.get<any>("http://localhost:3000/signUp").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("Login Succesful")
        this.loginForm.reset();
        this.router.navigate(['appoint'])
        localStorage.setItem('auth', 'true');
        // this.eventClicked.emit(user)
      } else {
        alert("user not found")
      }
    }, err => {
      alert("something went wrong")
    })

  }

  ngOnInit(): void {
  }

}
