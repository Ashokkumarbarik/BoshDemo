import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'customer';
import { CustomerService } from 'customerservice';

@Component({
  selector: 'dashboard-user-lists',
  templateUrl: './user-lists.component.html',

})
export class UserListsComponent implements OnInit {
  users : any[] = [];
selectedUsers: any;
  title = 'my-dream-bosh-assignment';
  constructor(private router: Router,
    private customerService: CustomerService) {

  }

  ngOnInit() {
    this.customerService.getUsrLists1().then(response => {
      this.users = response;

    });


  }
}
