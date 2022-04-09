import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  departBackground: string = 'url( https://images.prismic.io/screencloud/668f73fd-1aca-4d14-9c10-6a0ae330e6bc_50390505-0-img-mockup-healthcar.jpg?auto=compress,format)'


  constructor() { }

  ngOnInit(): void {
  }

}
