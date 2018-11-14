import { DataServiceService } from './../data-service.service';
import { Data } from './../data';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() data : Data[] = [];

cols: any[];
  constructor(private service: DataServiceService) { }
 title: string = 'Client Reports';
 selectedItem: string;

  ngOnInit() {

    this.cols = [
      { field: 'client', header: 'Client Name' },
      { field: 'portfolio', header: 'Portfolio Name' },
      { field: 'ticker', header: 'Portfolio Ticket' },
      { field: 'category', header: 'Category' },
      {field: 'reportName', header: 'Report Name' },
      {field: 'frequency', header: 'Frequency' },
      {field: 'date', header: 'Date' }
  ];

  this.data = this.service.getData();
  this.selectedItem = this.data[0].client;
  }

}
