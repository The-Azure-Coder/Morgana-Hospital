import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
