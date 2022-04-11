import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() event: any;

  subsid = [{ image: '../assets/logos/school-logo.png' }, { heading: 'Morgana University' }, { image: '../assets/logos/mogana-clinic.png' }, { heading: 'Morgana Clinic' }, { image: '../assets/logos/morgana-news.png' }, { heading: 'Morgana NewsFeed' }, { image: '../assets/logos/morgana-hotel.png' }, { heading: 'Morgana Hotel' }]
  subnav = ['Home', 'About us', 'Department & Services', 'Our Staff', 'Make An Appointmnet', 'Latest News']
  docList1 = ['Dr woo London', 'Dr Tyrese Morgan', 'Dr Jason Osborn', 'Dr Mary Pendegrast', 'Dr Talcia Genn', 'Dr emily chun', 'Dr Ray Willis', 'Dr Serena Williams', 'Dr Mia Fugi']
  docList2 = ['Dr Min Warret', 'Dr Jack Frost', 'Dr mill Forbes', 'Dr Mary Lee', 'Dr Tanya woo', 'Dr lucy heart', 'Dr Natsu Drag', 'Dr Cia Read']
  docList3 = ['Dr william Grant', 'Dr Elsia Wint', 'Dr Willis Jackson', 'Dr Romario Read']
  docList4 = ['Dr wayne Johnson', 'Dr Romine Warry', 'Dr Leya book', 'Dr Mario Dead']
  authenticated: boolean = this.isLoggedIn();
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.authenticated = this.isLoggedIn();
  }

  footerRoute(route: string) {
    return this.router.url === route
  }

  logOut() {
    alert('You are logged out')
    localStorage.removeItem('auth')
    this.router.navigate(['/']);
    this.authenticated = this.isLoggedIn();
  }

  isLoggedIn() {
    if (localStorage.getItem('auth')) {
      // console.log()
      return true
    } else {
      return false
    }


  }



}
