import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number1 = 0;
  number2=  0;
  result =  0;
  oparetor = "";

  operatorSum() {
    this.oparetor = '+';
  }

  operatorSubtraction() {
    this.oparetor = '-';
  }

  operatorMultiplication() {
    this.oparetor = '*';
  }

  operatorDivision() {
    this.oparetor = '/';
  }

  calculator() {
    switch (this.oparetor) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
    }
  }
}
