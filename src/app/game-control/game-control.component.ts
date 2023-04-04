import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  number: number = 0;
  intervalId: any;

  onStartGame() {
    console.log('start!');

    this.intervalId = setInterval( () => {this.number += 1}, 3600);
  }

  onClear() {
    console.log('stop!');
    this.number = 0;
    clearInterval(this.intervalId);
  }
}
