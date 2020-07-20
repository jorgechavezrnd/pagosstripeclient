import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentComponent } from './payment/payment.component';
import { ListaArticuloComponent } from './articulo/lista-articulo.component';
import { DetalleArticuloComponent } from './articulo/detalle-articulo.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModalComponent,
    PaymentComponent,
    ListaArticuloComponent,
    DetalleArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_51H6lJuB9DXC4y4iUEdhALG7UDiBoOJRQLApKC1hwHrmRFWrdaWo85URtFWBewoalPjF3EdD8CS3ez4FLABN4iwCc00tf3C0dMP'),
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [ ModalComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
