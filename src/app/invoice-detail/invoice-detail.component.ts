import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { BookInInvoice } from '../../models/bookInInvoice';

@Component({
  selector: 'invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @Input()
  invoice:Invoice;
  @Input()
  isEditable:boolean;
  constructor() { }

  ngOnInit() {
   
  }


  quantityChanged(book:BookInInvoice,updateBookQuantity:number){
    if(updateBookQuantity<=0){
      this.invoice.deleteBook(book);
    }
      this.invoice.updateBook(book, updateBookQuantity, null);
  }

   discountChanged(book:BookInInvoice,updateBookDiscount:number){
      this.invoice.updateBook(book, null, updateBookDiscount);
  }

  updateBookInInvoice(book: BookInInvoice, updateBookQuantity: number, updateBookDiscount: number) {
    this.invoice.updateBook(book, updateBookQuantity, updateBookDiscount);
  }

  deleteBookInInvoice(book: BookInInvoice) {
    this.invoice.deleteBook(book);
  }

}
