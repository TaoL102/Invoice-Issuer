import { Component, OnInit,Input,Injectable, Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { BookFilter } from '../../services/BookFilter';
import { ClientFilter } from '../../services/ClientFilter';
import { OrderBy } from '../../services/OrderBy';
import { Invoice } from '../../models/invoice';
import { Book } from '../../models/book';
import { Client } from '../../models/client';
import { Settings } from '../../models/settings';
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
filteredInvoices : Invoice[] = new Array();

@Input()
invoice:Invoice;

 @Input()
  invoices: FirebaseListObservable<Invoice[]>; 
  @Input()
  settings: FirebaseObjectObservable<Settings>;
  @Input()
  isPaid:boolean;


  constructor() { }

  ngOnInit() {
    this.invoices.subscribe(o=>
      {
        this.filteredInvoices= o.filter(j=> 
         this.isPaid? j.isPaid==this.isPaid :( !j.isPaid || j.isPaid==this.isPaid )
        );
      }
      );
  }

  invoiceSeleted(invoice){
    this.invoice=invoice;
    if(this.invoice.currencyCode==null){
      this.settings.subscribe((o)=>{
        this.invoice.currencyCode= o.currencycode;
      })
    }
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

  pay(key:string){
    this.invoice.isPaid=true;
    var promise = this.invoices.update(key,this.invoice);
    SharedMethods.showFirebaseResult(promise);
    promise
      .then(_ => {
        this.invoice=null;
        // TODO: CHANGE COOKIE
      })
      .catch(err => console.log(err, 'Delete Failed!'));
  }

}
