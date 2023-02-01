import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedDataService } from '../shared-data.service';
import { FormInfo } from '../form-info';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  standalone:true,
  imports:[CommonModule,MaterialModule,FormsModule]
})
export class DatepickerComponent implements OnInit {
submitted:boolean;
  constructor(private shareData:SharedDataService, private route:Router) { }

  ngOnInit() {
  }
onSubmit(form:FormInfo){
  console.table(form)
  this.shareData.setData(form);
    this.route.navigate(['/confirmation']);
}
}