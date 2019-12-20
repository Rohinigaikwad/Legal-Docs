import { Component } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
  ])
 ]
})

export class AppComponent {
  title = 'image-app';
  state = 'default';
  imgSrc = 'https://images.template.net/wp-content/uploads/2016/04/27090026/Car-Wallpaper1.jpg';
  widthInc = '200px';
  widthDec =  '100px';
  rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

    zoomIn() {
      // npm  this.imgSrc =
    }

}
