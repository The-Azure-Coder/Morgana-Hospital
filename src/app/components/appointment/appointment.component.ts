import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  genders = ["Male", "Female"]
  departTypes = ['Surgery', 'Gynecology', 'Cancer Treatment', 'Dentistry', 'Radiology', 'Nursing']
  appointBackground: string = 'url( https://stormotion.io/blog/content/images/2017/07/doctor-appointment-app-cover-1.jpg)'


  appointForm = new FormGroup({
    'fname': new FormControl('', [Validators.required]),
    'lname': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'mobile': new FormControl('', [Validators.required, Validators.minLength(10)],),
    'dob': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'gender': new FormControl('', [Validators.required]),
    'department': new FormControl('', [Validators.required]),
    'message': new FormControl('', [Validators.required])

  })

  submitted = false

  constructor(private api: ApiService) { }

  onSubmit() {
    this.submitted = true
  }

  ngOnInit(): void {
  }

  bookAppointment() {
    if (this.appointForm.valid) {
      this.api.postAppointment(this.appointForm.value).subscribe({
        next: (res) => {
          alert('Appointment Booked successfully')
          this.appointForm.reset();
        }, error: () => {
          alert("Error While booking the appointment")

        }
      })
    }

  }

}
