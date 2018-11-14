
import { Injectable } from '@angular/core';
import { Data } from './data';
 const tableData: Data[] = [
  new Data('Item1', 'Item1', 'Ticker1', 'Item2', 'Item2','Item2', new Date('December 17, 1995 03:24:00')),
  new Data('Item2', 'Item2', 'Ticker1', 'Item2', 'Item2','Item2', new Date('December 17, 1995 03:24:00')),
  new Data('Item3', 'Item3', 'Ticker2', 'Item2', 'Item2','Item2', new Date('December 17, 1995 03:24:00')),
  new Data('Item4', 'Item4', 'Ticker2', 'Item2', 'Item2','Item2', new Date('December 17, 1995 03:24:00'))];

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getData(){
    return tableData;
  }
}
