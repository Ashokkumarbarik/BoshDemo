import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getUsrLists() {
      return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }
    getUsrLists1() {
      return this.http.get<any>('https://reqres.in/api/users')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }
}
