import { Component } from '@angular/core';

@Component({
  selector: 'app-one-piece',
  templateUrl: './one-piece.component.html',
  styleUrls: ['./one-piece.component.css']
})
export class OnePieceComponent {
  private audio: HTMLAudioElement;
  public playing: boolean = false;

  constructor() {
    this.audio = new Audio('assets/songs/op.mp3'); 
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
