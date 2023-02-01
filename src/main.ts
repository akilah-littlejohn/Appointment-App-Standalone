import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '', redirectTo: 'datepicker', pathMatch: 'full' },

];

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
 <router-outlet><router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],
});
