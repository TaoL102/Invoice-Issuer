import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Book } from 'models/book';
import { Client } from 'models/client';
import { Invoice } from 'models/invoice';
import { PaymentInfo } from 'models/paymentInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  currentUser: FirebaseAuthState;
  currentUserImgUrl:string;
  books: FirebaseListObservable<Book[]>;
  clients: FirebaseListObservable<Client[]>;
  invoices: FirebaseListObservable<Invoice[]>;
  paymentinfo: FirebaseObjectObservable<PaymentInfo>;

  constructor(public af: AngularFire) {
        this.af.auth.subscribe(snapshot => {
      this.currentUser = snapshot;
      this.currentUserImgUrl=snapshot.google.photoURL;
      console.log(this.currentUser);

    this.books = this.af.database.list(this.currentUser.uid + '/books');
    this.clients = this.af.database.list(this.currentUser.uid + '/clients');
    this.invoices = this.af.database.list(this.currentUser.uid + '/invoices');
    this.paymentinfo = this.af.database.object(this.currentUser.uid + '/paymentInfo');
    });

  }

  ngOnInit(): void {  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }


}
