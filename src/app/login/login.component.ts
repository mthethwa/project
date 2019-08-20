import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedUser = 3 ;
   

  users: User[] = [
    {value: 1, viewValue : "Admin"},
    {value: 2, viewValue : "Hairdresser"},
    {value: 3, viewValue : "Client"}
  ];

  
  constructor() { }

  ngOnInit() {
  }

}

export interface User {
  value: number;
  viewValue: string;
}
