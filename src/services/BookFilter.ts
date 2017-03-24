import { Component,Injectable,Pipe,PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2';

@Pipe({
  name: 'bookFilter'
})

@Injectable()

export class BookFilter implements PipeTransform {
transform(value, args?): any {
     if (value==null||value==""|| args==null||args=="") {
      return value;
    }
   return value.filter((book) => {
       if(args!=null){       
            return book.name.toLowerCase().indexOf(args.toLowerCase()) > -1;    
       }
        });  
  }
}