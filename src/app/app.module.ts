import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { BookFilter } from '../services/BookFilter';

export const firebaseConfig = {
  apiKey: 'AIzaSyBdnV29e0A0mwp3z56FEU-ub3-fPn_85cs',
  authDomain: 'invoiceissuer.firebaseapp.com',
  databaseURL: 'https://invoiceissuer.firebaseio.com',
  storageBucket: 'invoiceissuer.appspot.com',
  messagingSenderId: '458385736944'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    DropdownModule.forRoot(),
     ModalModule.forRoot(),
     TabsModule.forRoot()
  ],
  declarations: [
    AppComponent,BookFilter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
