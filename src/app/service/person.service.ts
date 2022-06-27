import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Order } from '../api/order.model';
import { Person } from '../api/person.model';

@Injectable()
export class PersonService {

    baseURL : string = 'http://localhost:7206/';
    constructor(private http: HttpClient) { }

    getAllPersons() {
        return this.http.get<any>(this.baseURL + 'Person/GetAllPersons');
    }

    getAllPersonByEmail(email: string) {
        return this.http.get<any>(this.baseURL + 'Person/GetAllPersonByEmail?email=' + email);
    }
}
