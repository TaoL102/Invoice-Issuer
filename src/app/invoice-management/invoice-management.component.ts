import { Component, OnInit,Input,Injectable, Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { BookFilter } from 'services/BookFilter';
import { ClientFilter } from 'services/ClientFilter';
import { Invoice } from 'models/invoice';
import { Book } from 'models/book';
import { Client } from 'models/client';

@Component({
  selector: 'invoice-management',
  templateUrl: './invoice-management.component.html',
  styleUrls: ['./invoice-management.component.css']
})
export class InvoiceManagementComponent implements OnInit {

filterInvoiceKeyWord:string;
invoice:Invoice;

 @Input()
  invoices: FirebaseListObservable<Invoice[]>;

  constructor() { }

  ngOnInit() {
  }

  invoiceSeleted(invoice){
    this.invoice=invoice;
  }

    print() {
    window.print();
  }

}
