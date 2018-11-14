import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
import { Navigation } from 'selenium-webdriver';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit , OnChanges{
@Input() title: string;
@Input() subtitle: string;
@Input() list: string[]=[];
@Input() navLinks: Navigation[] = [];
selectedItem: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.navLinks);
    this.selectedItem = this.list[0];
  }

  ngOnChanges(){
    console.log(this.selectedItem);
  }

}
