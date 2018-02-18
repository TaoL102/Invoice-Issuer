import { Component,Injectable,Pipe,PipeTransform } from '@angular/core';
import { Client } from '../models/client';

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
         let strInvNo:string= invoice.invoiceNumber;
         let client:Client= invoice.client;
         let strCliName=client.name;
         let isPaid:Boolean = invoice.isPaid ==true;

         console.log(args);
         console.log(strCliName);
            return  (isPaid)&&( strInvNo.indexOf(args.toLowerCase()) > -1 || strCliName.toLowerCase().indexOf(args.toLowerCase()) > -1);   
       }
        });  
  }
}