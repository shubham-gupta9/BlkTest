import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {MatInputModule} from '@angular/material/input';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { InvestmentComponent } from './investment/investment.component';
import { OrderComponent } from './order/order.component';
import { StatementComponent } from './statement/statement.component';
import { AccountComponent } from './account/account.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NavigationComponent,

    HomeComponent,
    InvestmentComponent,
    OrderComponent,
    StatementComponent,
    AccountComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    TableModule,
    DropdownModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
