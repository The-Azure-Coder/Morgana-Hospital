import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from 'custom.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formBackground: string = 'url(https://samabelade.com/wp-content/uploads/2022/03/Medical-Wallpaper-Backgrounds-63-images-.jpg)'
  submitted = false
  registerForm = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'dob': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    'cpassword': new FormControl('', [Validators.required]),
  },
    { validators: [Validation.match('password', 'cpassword')] }
  )

  countries = ['Jamaica', 'Cuba', 'Hati', 'Trinidad'];
  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.submitted = true;
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/signUp", this.registerForm.value)
      .subscribe(res => {
        if (this.registerForm.valid) {
          alert("Signup Successfull");
          this.registerForm.reset();
          this.router.navigate(['/login'])
        } else {
          alert('Input Inavlid')
        }
      }, err => {
        alert("Something Went Wrong")
      })
  }

  ngOnInit(): void {
  }

}
