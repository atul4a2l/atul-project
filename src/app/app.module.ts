import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './services/http.service';
import { GeneralProductsComponent } from './components/general-products/general-products.component';
import { OtherProductsComponent } from './components/other-products/other-products.component'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { SortablejsModule,SortablejsOptions } from 'ngx-sortablejs';
import { SortableCardComponent } from './components/sortable-card/sortable-card.component'
@NgModule({
  declarations: [
    AppComponent,
    GeneralProductsComponent,
    OtherProductsComponent,
    SortableCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DragDropModule,
    SortablejsModule.forRoot({ animation: 1200 }),
  ],
  providers: 
  [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
