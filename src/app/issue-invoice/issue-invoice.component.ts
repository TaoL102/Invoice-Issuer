import { Component, OnInit,Input,Injectable, Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { BookFilter } from 'services/BookFilter';
import { ClientFilter } from 'services/ClientFilter';
import { Invoice } from 'models/invoice';
import { Book } from 'models/book';
import { Client } from 'models/client';

@Component({
  selector: 'issue-invoice',
  templateUrl: './issue-invoice.component.html',
  styleUrls: ['./issue-invoice.component.css']
})
export class IssueInvoiceComponent implements OnInit {

  addBookToInvoiceDivHidden: boolean;
  selectedBook: Book;
  invoice:Invoice;

 @Input()
  clients: FirebaseListObservable<Client[]>;
 @Input()
  books: FirebaseListObservable<Book[]>;

  constructor() {
   }

  ngOnInit() {
    this.addBookToInvoiceDivHidden = true;
    this.invoice=new Invoice(); 
  }

    clientSeleted(client: Client) {
    this.invoice.client=client;
  }

  bookSeleted(book: Book) {
    this.selectedBook = book;
    this.addBookToInvoiceDivHidden = false;
  }

  addBookToInvoice(selectedBook: Book, selectedBookQty: number) {
    this.invoice.addBook(selectedBook,selectedBookQty);

    this.addBookToInvoiceDivHidden = true;

    console.log(this.invoice.books);
  }

}
