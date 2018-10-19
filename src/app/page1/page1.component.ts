import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
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
            status: 'NearlyDone'
        }
    ];

    display(oui){
        console.log(oui);
    }

    constructor(){
        setTimeout(
            () => {

            }, 4000
        );
    }



    ngOnInit() {
    }
}
