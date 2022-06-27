import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Order } from 'src/app/api/order.model';
import { Person } from 'src/app/api/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService, ConfirmationService],
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class CrudComponent implements OnInit {

    emailSearch:string= '';
    persons: Person[] = [];
   

    constructor(private personService: PersonService, private messageService: MessageService,
                private confirmationService: ConfirmationService) {}

    ngOnInit() {
        // this.messageService.add({severity: 'success', summary: 'Successful', detail: 'order Updated', life: 3000});
        this.personService.getAllPersons().subscribe(data => {
            this.persons = data;
        })
    }

    handleSearch() {
        this.personService.getAllPersonByEmail(this.emailSearch).subscribe(data => {
            this.persons.push(data);
        })
    }

 
}
