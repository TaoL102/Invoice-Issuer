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
       if(args[0]!=null){       
            return invoice.invoiceNumber.toLowerCase().indexOf(args[0].toLowerCase()) > -1;    
       }
        });  
  }
}