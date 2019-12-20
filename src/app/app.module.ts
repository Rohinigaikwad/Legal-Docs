import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlipComponent } from './flip/flip.component';
import { FlipYComponent } from './flip-y/flip-y.component';
import { ZoomComponent } from './zoom/zoom.component';
@NgModule({
  declarations: [
    AppComponent,
    FlipComponent,
    FlipYComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
