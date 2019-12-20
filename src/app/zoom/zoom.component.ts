import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css'],
  animations: [
    trigger('balloonEffect', [
    state('initial', style({
      backgroundColor: 'green',
      transform: 'scale(1)'
    })),
    state('final', style({
      backgroundColor: 'red',
      transform: 'scale(1.5)'
    })),
    transition('final=>initial', animate('1000ms')),
    transition('initial=>final', animate('1500ms'))
  ])
]
})
export class ZoomComponent implements OnInit {
  currentState = 'initial';
  constructor() { }

  ngOnInit() {
  }

  zoomIn() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
