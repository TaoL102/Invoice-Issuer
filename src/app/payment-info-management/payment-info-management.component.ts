import { Component, OnInit,Input } from '@angular/core';
import {PaymentInfo} from 'models/paymentInfo';
import { SharedMethods} from 'shared/methods';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'payment-info-management',
  templateUrl: './payment-info-management.component.html',
  styleUrls: ['./payment-info-management.component.css']
})
export class PaymentInfoManagementComponent implements OnInit {

@Input()
paymentinfo: FirebaseObjectObservable<PaymentInfo>;

  constructor() { }

  ngOnInit() {
  }

updatePaymentInfo(
    newName,
    newAddress,
    newCity,
    newPostCode,
    newCountry,
    newContact,
    newEmail,
    newAccountName,
    newGSTNumber,
    newAccountNumber
    ){
var promise = this.paymentinfo.update({ 
    name:newName,
    address:newAddress,
    city:newCity,
    postcode:newPostCode,
    country:newCountry,
    contact:newContact,
    email:newEmail,
    accountName:newAccountName,
    gstNumber:newGSTNumber,
    accountNumber:newAccountNumber
});
    SharedMethods.showFirebaseResult(promise);
    }
}
