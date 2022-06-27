import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Order } from '../api/order.model';

@Injectable()
export class OrderService {

    baseURL : string = 'http://localhost:7206/';
    constructor(private http: HttpClient) { }

    getOrders() {
        return this.http.get<any>(this.baseURL + 'Orders/GetOrders');
    }

    getOrdersByEmail(email: string) {
        return this.http.get<any>(this.baseURL + 'Orders/GetOrdersByPersonalEmail?email=' + email);
    }
    getOrdersMixed() {
        return this.http.get<any>('assets/demo/data/Orders-mixed.json');
    }

    getOrdersWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/Orders-orders-small.json');
    }
}
