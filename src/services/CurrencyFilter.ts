import { Component,Injectable,Pipe,PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFilter'
})

@Injectable()

export class CurrencyFilter implements PipeTransform {
transform(value, args?): any {
     if (value==null||value==""|| args==null||args=="") {
      return value;
    }
   return value.filter((currency) => {
       if(args!=null){   
         let code:string= currency.code;
         let countryName:string= currency.countryname;

            return code.toLowerCase().indexOf(args.toLowerCase()) > -1 || countryName.toLowerCase().indexOf(args.toLowerCase()) > -1;   
       }
        });  
  }
}