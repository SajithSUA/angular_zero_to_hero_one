import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  // how to add Propert in component
  @Input() userDetails

  ngOnInit() {
    console.log(this.userDetails);
    
  }

}
