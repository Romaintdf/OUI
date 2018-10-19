import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  imagePath = "src/assets/img.jpg";
  constructor(){
    setTimeout(
        () => {

        }, 4000
    );
  }


  ngOnInit() {
  }
}
