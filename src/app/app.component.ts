import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Book } from '../models/book';
import { Client } from '../models/client';
import { Invoice } from '../models/invoice';
import { PaymentInfo } from '../models/paymentInfo';
import { Settings } from '../models/settings';
import { InvoiceFilter } from '../services/InvoiceFilter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  isLoading: boolean;
  isLoginRequired: boolean;
  currentUser: Observable<firebase.User>;
  books: FirebaseListObservable<Book[]>;
  clients: FirebaseListObservable<Client[]>;
  invoices: FirebaseListObservable<Invoice[]>;
  paidInvoices: FirebaseListObservable<Invoice[]>;
  paymentinfo: FirebaseObjectObservable<PaymentInfo>;
  settings: FirebaseObjectObservable<Settings>;
  
  constructor(public afAuth: AngularFireAuth,public afDB: AngularFireDatabase) {
    this.isLoading = true;
     this.currentUser = afAuth.authState;
     afAuth.authState.subscribe(
       snapshot => {
if(snapshot){
  this.initData(snapshot.uid);
  this.isLoading=false;
  this.isLoginRequired=false;
}
else{
  this.isLoading=false;
  this.isLoginRequired=true;
}
         
       });

  }
  
  ngOnInit(): void {  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  initData(uid:string){
    this.books = this.afDB.list('/'+uid + '/books');
    this.clients = this.afDB.list('/'+uid + '/clients');
    this.invoices = this.afDB.list('/'+uid + '/invoices');
    this.paidInvoices = this.afDB.list('/'+uid + '/invoices/paid');
    this.paymentinfo = this.afDB.object('/'+uid + '/paymentInfo');
    this.settings=this.afDB.object('/'+uid + '/settings');
  }

}
