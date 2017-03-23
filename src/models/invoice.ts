import {PaymentInfo} from 'models/paymentInfo';
import { DatePipe } from '@angular/common';

export class Invoice {
    invoiceNumber: string;
    date: Date;
    client: any;
    books: Array<any>;
    paymentInfo:PaymentInfo;

    constructor() {
        let latest_date =new DatePipe('en-NZ').transform(new Date(), 'yyyyMMdd');
        this.invoiceNumber =latest_date+this.getRandomInt(10000, 99999);
        this.books = new Array<any>();
        this.date = new Date();
    }

    getRandomLetter(count) {
        let letters = new Array<string>(
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        );
        let returnStr: string = '';
        for (let i = 0; i < count; i++) {
            returnStr += letters[this.getRandomInt(0, letters.length)];
        }
        return returnStr;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addBook(book: any, bookQty: number) {
        this.books.push({
            key: book.$key,
            name: book.name,
            price: book.price,
            quantity: bookQty,
            discount: 0
        });

    }

    updateBook(book: any, updateBookQuantity: number, updateBookDiscount: number) {
        let bookInInvoice = this.books.find(x => x.key == book.key);
        console.log(book);
        if(updateBookQuantity!=null){
   bookInInvoice.quantity = updateBookQuantity;
        }
     if(updateBookDiscount!=null){
 bookInInvoice.discount = updateBookDiscount;
     }
       

    }

    deleteBook(book: any) {
        this.books.splice(this.books.indexOf(book), 1);
    }

}