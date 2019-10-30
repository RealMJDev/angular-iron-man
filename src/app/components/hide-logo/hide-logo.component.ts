import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-logo',
  templateUrl: './hide-logo.component.html',
  styleUrls: ['./hide-logo.component.scss']
})
export class HideLogoComponent implements OnInit {
  img = '../../assets/images/logo.png';
  isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;
  }

}
