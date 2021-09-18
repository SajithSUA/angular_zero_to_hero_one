import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appName = 'User Registration'
  userName: string = ''
  phoneNumber: string = ''
  buttonDisable = true

  users = []


  addUser() {
    console.log(this.buttonDisable)
    this.users.push({
      name: this.userName,
      phoneNo: this.phoneNumber
    })

    this.userName = ''
    this.phoneNumber = ''
    this.validate()
  }

  validate() {
    this.buttonDisable = (this.userName.length > 0 && this.phoneNumber.length > 0) ? false : true;
  }
}
