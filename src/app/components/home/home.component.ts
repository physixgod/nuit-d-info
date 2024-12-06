import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private audio: HTMLAudioElement;
  public playing: boolean = false;

  constructor() {
    this.audio = new Audio('assets/songs/digital.mp3'); 
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
