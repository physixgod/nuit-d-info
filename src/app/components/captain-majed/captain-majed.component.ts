import { Component } from '@angular/core';

@Component({
  selector: 'app-captain-majed',
  templateUrl: './captain-majed.component.html',
  styleUrls: ['./captain-majed.component.css']
})
export class CaptainMajedComponent {
  private audio: HTMLAudioElement;
  public playing: boolean = false;

  constructor() {
    this.audio = new Audio('assets/songs/majed.mp3'); 
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
