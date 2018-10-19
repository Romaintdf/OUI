import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = "Done";
  task = [
    {
      name: 'Download Notepad',
      status: 'ToBedone'
    },
    {
      name: 'Find a job',
      status: 'ToBeDone'
    },
    {
      name: 'Help Quentin',
      status: 'ToBeDone'
    }
  ];

  constructor() {
    setTimeout(
        () => {

        }, 4000
    );
  }
}
