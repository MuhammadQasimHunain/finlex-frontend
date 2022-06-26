import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Order } from '../api/order.model';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }

    getOrdersSmall() {
        return this.http.get<any>('assets/demo/data/Orders-small.json')
        .toPromise()
        .then(res => res.data as Order[])
        .then(data => data);
    }

    getOrders() {
        return this.http.get<any>('assets/demo/data/Orders.json')
        .toPromise()
        .then(res => res.data as Order[])
        .then(data => data);
    }

    getOrdersMixed() {
        return this.http.get<any>('assets/demo/data/Orders-mixed.json')
        .toPromise()
        .then(res => res.data as Order[])
        .then(data => data);
    }

    getOrdersWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/Orders-orders-small.json')
        .toPromise()
        .then(res => res.data as Order[])
        .then(data => data);
    }
}
