import { Injectable } from '@angular/core';
import { FormInfo } from './form-info';

@Injectable({
  providedIn:'root'
})
export class SharedDataService {
private data:FormInfo

  constructor() { }

  setData(formData:FormInfo){
    this.data = formData
  }

  getData():FormInfo{
    return this.data;
  }
}