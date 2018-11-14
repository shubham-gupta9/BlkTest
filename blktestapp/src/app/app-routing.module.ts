import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { StatementComponent } from './statement/statement.component';
import { InvestmentComponent } from './investment/investment.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { OrderComponent } from './order/order.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'perf', component:InvestmentComponent},
  {path:'order', component:OrderComponent},
  {path:'statement', component:TableComponent},
  {path:'account', component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
