import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myText = 'Hello World';
  user = {
    name: "abdullah khan",
    city: "Islamabad",
    interest: ['cricket','Gaming','Movies']
  };


  constructor() {}

}
