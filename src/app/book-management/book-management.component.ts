import { Component, OnInit,Input, Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { BookFilter } from 'services/BookFilter';
import {Book} from 'models/book';
import { SharedMethods} from 'shared/methods';

@Component({
  selector: 'book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
   searchBookKeyword: string;

 @Input()
  books: FirebaseListObservable<Book[]>;

  constructor() { 
   }

  ngOnInit() {
  }

addBook(newName: string, newPrice: string) {
    var promise = this.books.push({ name: newName, price: newPrice });
    SharedMethods.showFirebaseResult(promise);
  }
  updateBook(key: string, newName: string, newPrice: string) {
    var promise = this.books.update(key, { name: newName, price: newPrice });
    SharedMethods.showFirebaseResult(promise);
  }
  deleteBook(key: string) {
    var promise = this.books.remove(key);
    SharedMethods.showFirebaseResult(promise);
  }
}
