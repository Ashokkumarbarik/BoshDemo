import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'customer';
import { CustomerService } from 'customerservice';

@Component({
  selector: 'dashboard-user-profile',
  templateUrl: './user-profile.component.html',

})
export class UserProfileComponent {
  title = 'my-dream-bosh-assignment';
  customers: Customer[] = [];

  selectedCustomers: Customer[];
  tilte: any;

  constructor(private router: Router, private customerService: CustomerService) {

  }

  ngOnInit() {

  }
}
