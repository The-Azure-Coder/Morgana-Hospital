import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = ['Chosing a doctor', 'Primary Medical care', 'Our support Forumn', 'Discuss to your doctor', 'User Account', ' Help Center']
  services = ['Surgical Operations', 'Emergency Care', 'Mediacal Checkup', 'Diagnostic Checkup', 'Pharmacy service']
  news = [
    { image: '../assets/images/surgery.jpg' },
    { des: 'Doctor perform a difficult surgery on the son of a politition' },
    { date: '5 Apr 2022' },
    { image: '../assets/images/debate.jpg' },
    { des: 'Docyors debate on the best method to operate under the circumstances' },
    { date: '8 Apr 2022' },
    { image: '../assets/images/docs.jpg' },
    { des: 'A new batch of doctors as arrive' },
    { date: '12 Apr 2022' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
