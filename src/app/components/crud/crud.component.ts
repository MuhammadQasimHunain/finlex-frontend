import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Order } from 'src/app/api/order.model';

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService, ConfirmationService],
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class CrudComponent implements OnInit {

    orderDialog: boolean;

    deleteorderDialog: boolean = false;

    deleteordersDialog: boolean = false;

    orders: Order[];

    order: Order;

    selectedorders: Order[];

    submitted: boolean;

    cols: any[];

    statuses: any[];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private orderService: OrderService, private messageService: MessageService,
                private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.orderService.getOrders().then(data => this.orders = data);

        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'price', header: 'Price'},
            {field: 'category', header: 'Category'},
            {field: 'rating', header: 'Reviews'},
            {field: 'inventoryStatus', header: 'Status'}
        ];

        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
    }

    openNew() {
        this.submitted = false;
        this.orderDialog = true;
    }

    deleteSelectedorders() {
        this.deleteordersDialog = true;
    }

    editorder(order: Order) {
        this.order = {...order};
        this.orderDialog = true;
    }

    deleteorder(order: Order) {
        this.deleteorderDialog = true;
        this.order = {...order};
    }

    confirmDeleteSelected(){
        this.deleteordersDialog = false;
        this.orders = this.orders.filter(val => !this.selectedorders.includes(val));
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'orders Deleted', life: 3000});
        this.selectedorders = null;
    }

    confirmDelete(){
        this.deleteorderDialog = false;
        this.orders = this.orders.filter(val => val.orderNo !== this.order.orderNo);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'order Deleted', life: 3000});
        // this.order = {};
    }

    hideDialog() {
        this.orderDialog = false;
        this.submitted = false;
    }

    saveorder() {
        this.submitted = true;

        if (this.order.productName.trim()) {
            if (this.order) {
                // @ts-ignore
                this.order.inventoryStatus = this.order.inventoryStatus.value ? this.order.inventoryStatus.value: this.order.inventoryStatus;
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'order Updated', life: 3000});
            } else {
                // @ts-ignore
                this.order.inventoryStatus = this.order.inventoryStatus ? this.order.inventoryStatus.value : 'INSTOCK';
                this.orders.push(this.order);
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'order Created', life: 3000});
            }

            this.orders = [...this.orders];
            this.orderDialog = false;
        }
    }

    findIndexById(orderNo: number): number {
        let index = -1;
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].orderNo === orderNo) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
