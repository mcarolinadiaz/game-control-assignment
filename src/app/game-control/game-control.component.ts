import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  number: number = 0;
  intervalId: any;
  starting: boolean = false;
  @Output('gameStarted') gameStarted = new EventEmitter<number>();
  @Output('gameStopped') gameStopped = new EventEmitter<number>();

  onStartGame() {
    this.starting = true;
    this.intervalId = setInterval( () => {this.number += 1; this.gameStarted.emit(this.number);}, 3600);
  }

  onClear() {
    this.number = 0;
    this.gameStopped.emit(this.number);
    this.starting = false;
    clearInterval(this.intervalId);
  }
}
