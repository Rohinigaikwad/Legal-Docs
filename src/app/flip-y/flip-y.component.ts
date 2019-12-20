import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-flip-y',
  templateUrl: './flip-y.component.html',
  styleUrls: ['./flip-y.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        transform: 'rotateX(180.9deg)'
      })),
      state('final', style({
        transform: 'rotateX(0)'
      })),
      transition('initial=>final', animate('1500ms')),
    transition('final=>initial', animate('1000ms'))
    ])
  ]
})
export class FlipYComponent implements OnInit {
  currentState = 'initial';
  constructor() { }

  ngOnInit() {
  }
  toggleFlip() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
