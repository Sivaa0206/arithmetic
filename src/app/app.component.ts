import { Component } from '@angular/core';
import { AddService } from './add.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'arithmetic';
  num1: any;
  num2: any;
  num3: any;
  constructor(public addService: AddService) {}
  onAdd() {
    this.num3 = this.addService.add(this.num1, this.num2);
    //alert(this.num3)
  }
  sub() {
    this.num3 = this.num1 - this.num2;
    //alert(this.num3)
  }
  mul() {
    this.num3 = this.num1 * this.num2;
    // alert(this.num3)
  }
  div() {
    this.num3 = this.num1 / this.num2;
    //alert(this.num3)
  }
}
