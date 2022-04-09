import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffInfo: { img: string, name: string, title: string, des: string }[] = []

  staffBackground: string = 'url(https://www.libm.co.uk/wp-content/uploads/2018/10/237-Essential-Training-for-Healthcare-Staff.jpg)'
  constructor(private _staff: StaffService) { }

  ngOnInit(): void {
    this._staff.getStaffInfo().subscribe(data => {
      this.staffInfo = data;
    });
  }

}
