import { Component, OnInit,Input,Injectable, Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { BookFilter } from '../../services/BookFilter';
import { ClientFilter } from '../../services/ClientFilter';
import { OrderBy } from '../../services/OrderBy';
import { Invoice } from '../../models/invoice';
import { Book } from '../../models/book';
import { Client } from '../../models/client';
import { SharedMethods } from '../../shared/methods';

@Component({
  selector: 'invoice-management',
  templateUrl: './invoice-management.component.html',
  styleUrls: ['./invoice-management.component.css']
})
export class InvoiceManagementComponent implements OnInit {

filterInvoiceKeyWord:string;
order = "invoiceNumber";
ascending = false;

@Input()
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

  delete(key:string){
    var promise = this.invoices.remove(key);
    SharedMethods.showFirebaseResult(promise);
    promise
      .then(_ => {
        this.invoice=null;
        // TODO: CHANGE COOKIE
      })
      .catch(err => console.log(err, 'Delete Failed!'));
  }

}
