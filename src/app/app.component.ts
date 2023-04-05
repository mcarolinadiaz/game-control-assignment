import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  increasingNumber = 0;
  onStartedGame(number: number) {
    this.increasingNumber = number;
  }
  onStoppedGame(number: number) {
    this.increasingNumber = number;
  }
}
