import { Component } from '@angular/core';

@Component({
  selector: 'app-dragon-ball',
  templateUrl: './dragon-ball.component.html',
  styleUrls: ['./dragon-ball.component.css']
})
export class DragonBallComponent {
  private audio: HTMLAudioElement;
  public playing: boolean = false;

  constructor() {
    this.audio = new Audio('assets/songs/db.mp3'); 
  }

  playAudio(): void {
    if (this.playing) {
      this.audio.pause();
      this.audio.currentTime = 0; 
      this.playing = false;
    } else {

      this.audio.play();
      this.playing = true;
    }
  }
}
