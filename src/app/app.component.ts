import { Component, Injectable, Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { BookFilter } from '../services/BookFilter';
import { ClientFilter } from '../services/ClientFilter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  searchBookKeyword: string;
  books: FirebaseListObservable<any[]>;
  clients: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.books = af.database.list('/books');
    this.clients = af.database.list('/clients');

  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }


  addBook(newName: string, newPrice: string) {
    var promise = this.books.push({ name: newName, price: newPrice });
    this.showFirebaseResult(promise);
  }
  updateBook(key: string, newName: string, newPrice: string) {
    var promise = this.books.update(key, { name: newName, price: newPrice });
    this.showFirebaseResult(promise);
  }
  deleteBook(key: string) {
    var promise = this.books.remove(key);
    this.showFirebaseResult(promise);
  }

  addClient(name: string, email: string, address: string, city: string, postcode: string, country: string) {
    var promise = this.clients.push({
      name: name,
      email: email,
      address: address,
      city: city,
      postcode: postcode,
      country: country
    });
    this.showFirebaseResult(promise);
  }
  updateClient(key: string, name: string, email: string, address: string, city: string, postcode: string, country: string) {
    var promise = this.clients.update(key, {
      name: name,
      email: email,
      address: address,
      city: city,
      postcode: postcode,
      country: country
    });
    this.showFirebaseResult(promise);
  }
  deleteClient(key: string) {
    var promise = this.clients.remove(key);
    this.showFirebaseResult(promise);
  }

  showFirebaseResult(promise: firebase.Promise<void>) {

    promise
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'Delete Failed!'));
  }

}
