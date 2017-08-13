import {Injectable} from '../../node_modules/@angular/core';
import * as $ from 'jquery';
import * as firebase from 'firebase/app';

@Injectable()
export class SharedMethods{
     constructor(){
      
     }
  public static showFirebaseResult(promise: firebase.Promise<void>) {

    promise
      .then(_ => {
        $(".alert").css("background-color","#59BD07").show().delay(5000).fadeOut();
      })
      .catch(err => {
         $(".alert").html("<strong>Error</strong> "+err+".").css("background-color","#D6D6D6").show().delay(5000).fadeOut();
      });
  }
}