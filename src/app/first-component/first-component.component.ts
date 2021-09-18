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

  users:any[]

  ngOnInit() {
    console.log(this.userDetails);
    
  }

  removeUser(selectname:string)
  {
    this.users = this.userDetails
    this.users.forEach((element,index)=>{
      if(element.name == selectname) this.users.splice(index,1);
   });

    this.userDetails = this.users
  }
}
