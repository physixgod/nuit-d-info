import { Component } from '@angular/core';

@Component({
  selector: 'app-detective-conan',
  templateUrl: './detective-conan.component.html',
  styleUrls: ['./detective-conan.component.css']
})
export class DetectiveConanComponent {
  private audio: HTMLAudioElement;
  public playing: boolean = false;

  constructor() {
    this.audio = new Audio('assets/songs/dc.mp3'); 
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
