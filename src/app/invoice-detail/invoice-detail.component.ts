import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from 'models/invoice';

@Component({
  selector: 'invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @Input()
  invoice: Invoice;
  booksInInvoice: Array<any>;

  constructor() { }

  ngOnInit() {
    this.booksInInvoice = this.invoice.books;
  }
  quantityChanged(book:any,updateBookQuantity:number){
      this.invoice.updateBook(book, updateBookQuantity, null);
  }

    discountChanged(book:any,updateBookDiscount:number){
      this.invoice.updateBook(book, null, updateBookDiscount);
  }

  updateBookInInvoice(book: any, updateBookQuantity: number, updateBookDiscount: number) {
    this.invoice.updateBook(book, updateBookQuantity, updateBookDiscount);
  }

  deleteBookInInvoice(book: any) {
    this.invoice.deleteBook(book);
  }

}
