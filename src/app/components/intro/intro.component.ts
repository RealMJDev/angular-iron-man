import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  alias = 'Tony Stark';
  stageName = 'Iron-Man';
  age = 34;
  color1 = 'red';
  color2 = 'gold';

  constructor() { }

  ngOnInit() {
  }

  playAudio() {
    const audio = new Audio();
    audio.src = "../../assets/soundtrack.mp3";
    audio.load();
    audio.play();
  }

}
