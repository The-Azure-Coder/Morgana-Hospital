import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  // formbackground: string = 'url( https://cdn0.scrvt.com/a534b4b72e47031e7c1755abc55cf709/cc015cd51d0ba9cb/525bc8e6b9af/v/04ebfa781643/Health-Care-Management-Header.jpg)'

  appointForm !: FormGroup
  constructor(private formbuider: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.appointForm = this.formbuider.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      message: ['', Validators.required]

    })
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
