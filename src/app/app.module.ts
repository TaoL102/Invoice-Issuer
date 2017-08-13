import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BookFilter } from '../services/BookFilter';
import { ClientFilter } from '../services/ClientFilter';
import { InvoiceFilter } from '../services/InvoiceFilter';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { IssueInvoiceComponent } from './issue-invoice/issue-invoice.component';
import { InvoiceManagementComponent } from './invoice-management/invoice-management.component';
import { PaymentInfoManagementComponent } from './payment-info-management/payment-info-management.component';
import { CookieModule } from 'ngx-cookie';
import { CookieService } from 'ngx-cookie';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CookieModule.forRoot()
  ],
  declarations: [
    AppComponent, 
    BookFilter, 
    ClientFilter, 
    InvoiceFilter,
    InvoiceDetailComponent, 
    BookManagementComponent, 
    ClientManagementComponent, 
    IssueInvoiceComponent, 
    InvoiceManagementComponent,
    PaymentInfoManagementComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
