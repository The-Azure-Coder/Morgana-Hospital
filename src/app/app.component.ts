import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'morgana-hospital';

  public clickedEvent!: any;

  childEventClicked(event: any) {
    this.clickedEvent = event;
  }
}
