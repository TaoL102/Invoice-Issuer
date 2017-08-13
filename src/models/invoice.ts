import { PaymentInfo } from '../models/paymentInfo';
import { DatePipe } from '@angular/common';
import { Client } from '../models/client';
import { Book } from '../models/book';
import { BookInInvoice } from '../models/bookInInvoice';
import { CookieService } from 'ngx-cookie';

export class Invoice {
    invoiceNumber: string;
    orderNumber: string;
    date: number;
    client: Client;
    books: Array<BookInInvoice>;
    subTotal: number;
    postage: number;
    gst: number;
    total: number;
    paymentInfo: PaymentInfo;

    constructor(cookieService:CookieService) {

        this.invoiceNumber = this.generateId(cookieService);
        this.books = new Array<BookInInvoice>();
        this.date = new Date().getTime();
        this.subTotal = 0;
        this.postage = 0;
        this.gst = 0;
        this.total = 0;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateId(cookieService:CookieService) {
        let dateToday: string = new DatePipe('en-NZ').transform(new Date(), 'yyMMdd');
        let invoicesToday: string = cookieService.get(dateToday);

        if (invoicesToday == null) {
            let id: string = dateToday + "001";
            return id;
        }
        else {
            // split 
            let array: Array<string> = invoicesToday.split(',');
            let inValidId: boolean = true;
            let id: string = null;

            while (inValidId) {
                id = (parseInt(array[array.length - 1]) + 1).toString();
                if (array[id] == null) {
                    inValidId = false;
                    break;
                }
            }
            return id;
        }
    }



    addBook(book: any) {
        let bookInInvoice = this.books.find(o => o.key == book.$key);

        // Check if already exists
        if (bookInInvoice == null) {
            this.books.push({
                key: book.$key,
                name: book.name,
                price: book.price,
                quantity: 1,
                discount: 0,
                total: book.price
            });
        }
        else {
            bookInInvoice.quantity = Number.parseInt("1") + Number.parseInt(bookInInvoice.quantity.toString());
            bookInInvoice.total = book.price * bookInInvoice.quantity * (1 - bookInInvoice.discount * 0.01);
        }

        // Total 
        this.calculateTotalDetails();

    }

    updateBook(book: BookInInvoice, updateBookQuantity: number, updateBookDiscount: number) {
        let bookInInvoice = this.books.find(x => x.key == book.key);
        console.log(book);
        if (updateBookQuantity != null) {
            bookInInvoice.quantity = updateBookQuantity;
            bookInInvoice.total = bookInInvoice.price * updateBookQuantity * (1 - bookInInvoice.discount * 0.01);
        }
        if (updateBookDiscount != null) {
            bookInInvoice.discount = updateBookDiscount;
            bookInInvoice.total = bookInInvoice.price * bookInInvoice.quantity * (1 - updateBookDiscount * 0.01);
        }

        // Total 
        this.calculateTotalDetails();
    }

    deleteBook(book: BookInInvoice) {
        this.books.splice(this.books.indexOf(book), 1);
        // Total 
        this.calculateTotalDetails();
    }

    updatePostage(postage:number){
        this.postage=postage;
        this.calculateTotalDetails();
    }

    calculateTotalDetails() {
        this.calculateSubTotal();
        this.calculateGst();
        this.calculateTotal();
    }

    calculateSubTotal() {
        let sum: number = 0;
        this.books.forEach(o => {
            sum += Number.parseFloat(o.total.toString());
        })
        this.subTotal = sum;
    }

    calculateGst() {
        this.gst = (Number.parseFloat(this.subTotal.toString()) + Number.parseFloat(this.postage.toString())) * 0.15;
    }

    calculateTotal() {
        this.total = (Number.parseFloat(this.subTotal.toString()) +Number.parseFloat(this.postage.toString())+ Number.parseFloat(this.gst.toString())) ;
    }



}