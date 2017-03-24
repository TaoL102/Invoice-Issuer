import { Component,Injectable,Pipe,PipeTransform } from '@angular/core';

@Pipe({
  name: 'invoiceFilter'
})

@Injectable()

export class InvoiceFilter implements PipeTransform {
transform(value, args?): any {
     if (value==null||value==""|| args==null||args=="") {
      return value;
    }
   return value.filter((invoice) => {
       if(args!=null){   
         let str:string= invoice.invoiceNumber;
         console.log(args);
            return str.indexOf(args.toLowerCase()) > -1;   
       }
        });  
  }
}