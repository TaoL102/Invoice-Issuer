import { Component, OnInit,Input, Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ClientFilter } from '../../services/ClientFilter';
import { Client } from '../../models/client';
import { SharedMethods} from '../../shared/methods';

@Component({
  selector: 'client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {
searchClientKeyword: string;

 @Input()
  clients: FirebaseListObservable<Client[]>;

  constructor() { }

  ngOnInit() {
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
    SharedMethods.showFirebaseResult(promise);
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
    SharedMethods.showFirebaseResult(promise);
  }
  deleteClient(key: string) {
    var promise = this.clients.remove(key);
    SharedMethods.showFirebaseResult(promise);
  }

}
