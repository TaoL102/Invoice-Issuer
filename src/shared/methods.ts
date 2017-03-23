import {Injectable} from '../../node_modules/@angular/core';

@Injectable()
export class SharedMethods{
     constructor(){}
  public static showFirebaseResult(promise: firebase.Promise<void>) {

    promise
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'Delete Failed!'));
  }
}