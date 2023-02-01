import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormInfo } from '../form-info';
import { MaterialModule } from '../material/material.module';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  standalone:true,
  imports:[CommonModule, MaterialModule]
})
export class ConfirmationComponent implements OnInit {
data:FormInfo

  constructor(private sharedData:SharedDataService, private route:Router) { }

  ngOnInit() {
    this.data = this.sharedData.getData()
  }

  mockAppSubmit(){
    this.route.navigate(['/datepicker']);
  }

}