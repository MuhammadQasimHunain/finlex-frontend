import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/api/order.model';
import { Person } from 'src/app/api/person.model';
import { OrderService } from 'src/app/service/order.service';
import { PersonService } from 'src/app/service/person.service';
import { MessageService, ConfirmationService } from 'primeng/api'
@Component({
    templateUrl: './formlayout.component.html',
    providers: [MessageService, ConfirmationService]
})
export class FormLayoutComponent implements OnInit {

    order: any;
    persons: Person[];
    selectedState:any;
    /**
     *
     */
    constructor(private personService: PersonService, private messageService: MessageService,private orderService : OrderService) {
        
    }
    ngOnInit() {
        this.order = {};
        this.personService.getAllPersons().subscribe(data => {
            this.persons = data;
        });
    }
    clearData($event) {
        this.order = {};
    }
    saveData($event) {
        this.orderService.postOrder(this.order).subscribe(data => {
            if(data) {
                 this.messageService.add({severity: 'success', summary: 'Successful', detail: 'order Updated', life: 3000});
            }
            else {
                this.messageService.add({severity: 'error', summary: 'Error in saving data', detail: 'unable to update order', life: 3000});
            }
        })
    }


}
