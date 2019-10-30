import { Component, OnInit } from '@angular/core';
import { Cast } from '../../models/cast';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {
  cast: Cast[];

  constructor() { }

  ngOnInit() {
    this.cast = [
      {
        name: 'Rhodey',
        alias: 'War Machine',
        image: '../../assets/images/rhodey1.jpeg'
      },
      {
        name: 'Pepper',
        alias: `Tony's Wife`,
        image: '../../assets/images/pepper1.jpeg'
      },
      {
        name: 'Happy',
        alias: `Security`,
        image: '../../assets/images/happy1.jpeg'
      }
    ];
  }

}
