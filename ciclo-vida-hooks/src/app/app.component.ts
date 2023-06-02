import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclo-vida-hooks';
  estadoComponentCheck: boolean = true;

  descartarCheck():void {
    this.estadoComponentCheck = false;
  }
}
