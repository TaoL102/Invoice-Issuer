import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Book} from 'models/book';
import { Client } from 'models/client';
import { Invoice } from 'models/invoice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  books: FirebaseListObservable<Book[]>;
  clients: FirebaseListObservable<Client[]>;
    invoices: FirebaseListObservable<Invoice[]>;

  constructor(public af: AngularFire) {
    this.books = af.database.list('/books');
    this.clients = af.database.list('/clients');
    this.invoices=af.database.list('/invoices');
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }


}
