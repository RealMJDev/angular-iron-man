import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  alias:string = 'Tony Stark';
  stageName:string = 'Iron-Man';
  age:number = 34;
  color1 = 'red';
  color2 = 'gold';
  song = '../../assets/soundtrack.mp3';

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
