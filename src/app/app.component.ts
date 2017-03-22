import { Component,Injectable,Pipe,PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2';
import { BookFilter } from '../services/BookFilter';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
searchBookKeyword:string;
  books: FirebaseListObservable<any[]>;

constructor(public af: AngularFire) {
    this.books = af.database.list('/books');
  }

//   filterBook(filterBookKeyWord:string){
//     this.books = this.af.database.list('/books')
//     .map(items => {
// const filtered = items.filter(book => {
//  return book.name.toLowerCase().indexOf(filterBookKeyWord.toLowerCase()) > -1;
 
// });
// return filtered;
//     })  as FirebaseListObservable<any[]>;
  
// }

   login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }

 
  addItem(newName: string,newPrice:string) {
    const promise =this.books.push({ name: newName,price:newPrice });
     promise
      .then(_ => console.log('success'))
  .catch(err => console.log(err, 'Add failed!'));
  }
  updateItem(key: string, newName: string,newPrice:string) {
    const promise =this.books.update(key, { name: newName,price:newPrice });
    promise
      .then(_ => console.log('success'))
  .catch(err => console.log(err, 'Update Failed!'));
  }
  deleteItem(key: string) {    
    const promise =this.books.remove(key);    
promise
  .then(_ => console.log('success'))
  .catch(err => console.log(err, 'Delete Failed!'));
  }

}
