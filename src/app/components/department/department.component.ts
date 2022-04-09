import { Component, OnInit } from '@angular/core';
import { DepartService } from 'src/app/services/depart.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departBackground: string = 'url(https://wallpapercave.com/wp/wp2219683.jpg)'
  departInfo: { mainImg: string, department: string, estDate: string, des: string, cardHead: string, cardImg1: string, cardImg2: string, cardImg3: string, iconImg1: string, iconImg2: string, iconImg3: string, cardTitle1: string, cardTitle2: string, cardTitle3: string, cardDes1: string, cardDes2: string, cardDes3: string, cardDate1: string, cardDate2: string, cardDate3: string }[] = []

  constructor(private _depart: DepartService) { }

  ngOnInit(): void {
    this._depart.getDepartInfo().subscribe(data => {
      this.departInfo = data;
    });
  }

}
