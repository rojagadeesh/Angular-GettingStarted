import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{pageTitle}}</h1><pm-products></pm-products></div>`,
  styleUrls: ['./app.component.css'],
  providers : [ProductService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
