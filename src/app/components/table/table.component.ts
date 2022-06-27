import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Customer, Representative } from '../../api/customer';
import { OrderService } from '../../service/order.service';
import { Order } from '../../api/order.model';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api'
import { OrderList } from 'primeng/orderlist';

@Component({
    templateUrl: './table.component.html',
    providers: [MessageService, ConfirmationService],
    styleUrls: ['../../../assets/demo/badges.scss'],
    styles: [`
        :host ::ng-deep  .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height:.5rem;
        }
    `]
})
export class TableComponent implements OnInit {

    emailSearch:string = '';
    orders: Order[];


    constructor(private orderrService: OrderService, private messageService: MessageService, private confirmService: ConfirmationService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.orderrService.getOrders().subscribe(data => {
            this.orders = data;
        })
    }

    handleSearch() {
        this.orderrService.getOrdersByEmail(this.emailSearch).subscribe(data => {
            this.orders = data;
        })
    }
    formatCurrency(value) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
    clear(table: Table) {
        table.clear();
    }
}
