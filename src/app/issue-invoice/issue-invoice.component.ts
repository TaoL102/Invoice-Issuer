import { Component, OnInit, Input, Injectable, Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { BookFilter } from 'services/BookFilter';
import { ClientFilter } from 'services/ClientFilter';
import { Invoice } from 'models/invoice';
import { Book } from 'models/book';
import { Client } from 'models/client';
import { PaymentInfo } from 'models/paymentInfo';
import { SharedMethods } from 'shared/methods';

@Component({
  selector: 'issue-invoice',
  templateUrl: './issue-invoice.component.html',
  styleUrls: ['./issue-invoice.component.css']
})
export class IssueInvoiceComponent implements OnInit {

  selectedClient: Client;
  invoice: Invoice;
  booksNotEmpty: boolean;
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

  constructor(public af: AngularFire) {
  }

  ngOnInit() {
    this.invoice = new Invoice();
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
    this.invoice.postage = postage;
  }

  saveInvoice() {
    var promise = this.invoices.push(this.invoice);
    SharedMethods.showFirebaseResult(promise);
    promise
      .then(_ => {
        this.isInvoiceSaved = true;
        this.invoice.saveIdToCookies();
      })
      .catch(err => console.log(err, 'Delete Failed!'));
  }

  print() {
    window.print();
  }
}
