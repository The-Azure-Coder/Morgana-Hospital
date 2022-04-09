import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  genders = ["Male", "Female"]
  departTypes = ['Surgery', 'Gynecology', 'Cancer Treatment', 'Dentistry', 'Radiology', 'Nursing']

  appointForm !: FormGroup
  constructor(private formbuider: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<EditDialogComponent>
  ) { }

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
    // console.log(this.editData);
    if (this.editData) {
      this.appointForm.controls['fname'].setValue(this.editData.fname);
      this.appointForm.controls['lname'].setValue(this.editData.lname);
      this.appointForm.controls['email'].setValue(this.editData.email);
      this.appointForm.controls['mobile'].setValue(this.editData.mobile);
      this.appointForm.controls['dob'].setValue(this.editData.dob);
      this.appointForm.controls['address'].setValue(this.editData.address);
      this.appointForm.controls['gender'].setValue(this.editData.gender);
      this.appointForm.controls['department'].setValue(this.editData.department);
      this.appointForm.controls['message'].setValue(this.editData.message);
    }
  }

  updateAppointment() {
    if (this.appointForm.valid) {
      this.api.putAppointment(this.editData.id, this.appointForm.value).subscribe({
        next: (res) => {
          alert('Appointment updated successfully')
          this.dialogRef.close();
          // this.appointForm.reset();
        }, error: () => {
          alert("Error While uodating the appointment")

        }
      })
    }

  }

}
