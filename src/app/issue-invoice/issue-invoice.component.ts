import { Component, OnInit, Input, Injectable, Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { BookFilter } from '../../services/BookFilter';
import { ClientFilter } from '../../services/ClientFilter';
import { Invoice } from '../../models/invoice';
import { Book } from '../../models/book';
import { Client } from '../../models/client';
import { PaymentInfo } from '../../models/paymentInfo';
import { SharedMethods } from '../../shared/methods';
import { CookieService } from 'ngx-cookie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'issue-invoice',
  templateUrl: './issue-invoice.component.html',
  styleUrls: ['./issue-invoice.component.css']
})
export class IssueInvoiceComponent implements OnInit {

  selectedClient: Client;
  invoice: Invoice;
  booksNotEmpty: boolean;
  isOrderNumberConfirmed:boolean;
  isPostageConfirmed: boolean;
  isInvoiceSaved: boolean;

  @Input()
  clients: FirebaseListObservable<Client[]>;
  @Input()
  paymentinfo: FirebaseObjectObservable<PaymentInfo>;
  @Input()
  books: FirebaseListObservable<Book[]>;
  @Input()
  invoices: FirebaseListObservable<Invoice[]>;

  constructor(private cookieService:CookieService) {
  }

  ngOnInit() {
    this.Init();
  }

  Init(){
    this.isInvoiceSaved=false;
    this.booksNotEmpty=false;
    this.isOrderNumberConfirmed=false;
    this.isPostageConfirmed=false;
    this.selectedClient=null;
    this.invoice = new Invoice(this.cookieService);
    this.paymentinfo.subscribe(snapshot => {
      this.invoice.paymentInfo = snapshot;
    })
  }

  clientSeleted(client: Client) {
    this.selectedClient = client;
    this.invoice.client = client;
  }

  bookSeleted(book: Book) {
    this.addBookToInvoice(book);
  }

  addBookToInvoice(selectedBook: Book) {
    this.booksNotEmpty = true;
    this.invoice.addBook(selectedBook);
  }

  updatePostage(postage) {
    this.isPostageConfirmed = true;
    this.invoice.updatePostage(postage);
  }

  updateOrderNumber(orderNumber){
    this.isOrderNumberConfirmed=true;
    this.invoice.orderNumber=orderNumber;
  }

  saveInvoice() {
    var promise = this.invoices.push(this.invoice);
    SharedMethods.showFirebaseResult(promise);
    promise
      .then(_ => {
        this.isInvoiceSaved = true;
        this.saveIdToCookies();
      })
      .catch(err => console.log(err, 'Save Failed!'));
  }

  print() {
    window.print();
  }

  create(){
    this.Init();
  }

  delete(key:string){
    var promise = this.invoices.remove(key);
    SharedMethods.showFirebaseResult(promise);
    promise
      .then(_ => {
        this.invoice=null;
        //this.deleteIdFromCookies();
        this.create();
        // TODO: CHANGE COOKIE
      })
      .catch(err => console.log(err, 'Delete Failed!'));
  }

  saveIdToCookies() {
    let dateToday: string = new DatePipe('en-NZ').transform(new Date(), 'yyMMdd');
    let invoicesToday: string = this.cookieService.get(dateToday);

    if (invoicesToday == null) {
        this.cookieService.put(dateToday, this.invoice.invoiceNumber);
    }
    else {
        // split 
        let array: Array<string> = invoicesToday.split(',');
        array.push(this.invoice.invoiceNumber);
        this.cookieService.put(dateToday, array.toString());
    }
}

deleteIdFromCookies(){
  let dateToday: string = new DatePipe('en-NZ').transform(new Date(), 'yyMMdd');
  let invoicesToday: string = this.cookieService.get(dateToday);

  if (invoicesToday == null) {
    return;
  }
  else {
    let array: Array<string> = invoicesToday.split(',');
    var index = array.indexOf(this.invoice.invoiceNumber);
    if (index !== -1) {
      array.splice(index, 1);
    }
    this.cookieService.put(dateToday, array.toString());


  }
}
}
