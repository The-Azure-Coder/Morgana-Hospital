import { Component, OnInit } from '@angular/core';
import { AboutServiceService } from 'src/app/services/about-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutInfo: { img: string, title: string, des: string }[] = []

  heroBackground: string = 'url(https://reviewofmm.com/wp-content/uploads/2019/06/GettyImages-1141062052.jpg)'
  constructor(private _about: AboutServiceService) { }

  ngOnInit(): void {
    this._about.getAboutInfo().subscribe(data => {
      this.aboutInfo = data;

    });
  }

}
