import { Data } from './data';
import { Navigation } from './navigation';
import { Component } from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'BlackRock';
  subtitle: string ='Plymouth Energy';
  dropdownList: string[] = ['Item1', 'Item2', 'Item3'];
navigationList : Navigation[] = [
  new Navigation('Home', '/home'),
  new Navigation('Investment Performance', '/perf'),
  new Navigation('Orders', '/order'),
  new Navigation('Statements & Documents', '/statement'),
  new Navigation('Account Services', '/account'),
]}



