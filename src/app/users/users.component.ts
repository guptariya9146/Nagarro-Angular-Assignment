import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  page_title = "User Lists";

  // try to comment the user data
  users = [
    {name: 'Riya' , username: 'riya90' , email: 'riya90@email.com'},
    {name: 'Rishabh' , username: 'rishabh1090' , email: 'rishabh1000@email.com'},
    {name: 'Mohit' , username: 'mohit80' , email: 'mohit780@email.com'},
    {name: 'Shubham' , username: 'shubham100' , email: 'shubhamto@email.com'},
    {name: 'Shreya' , username: 'shreya540' , email: 'shreya890@email.com'}
  ];

  constructor() { }

  ngOnInit(): void {
}

}
