import { Component,Injectable,Pipe,PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2';

@Pipe({
  name: 'clientFilter'
})

@Injectable()

export class ClientFilter implements PipeTransform {
transform(value, args?): any {
     if (value==null||value==""|| args==null||args=="") {
      return value;
    }
   return value.filter((client) => {
       if(args!=null){       
            return client.name.toLowerCase().indexOf(args.toLowerCase()) > -1
            || client.email.toLowerCase().indexOf(args.toLowerCase()) > -1
            ;    
       }
        });  
  }
}