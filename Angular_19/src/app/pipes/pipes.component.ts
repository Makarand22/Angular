import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

  title = 'Angular Pipes Demo';
  today = new Date();
  amount = 12345.6789;
  percent = 0.5678;
  jsonData = { name: 'Makarand', age: 25, country: 'India' };
  text = 'hello world';
  longText = 'Angular is a great framework for building web applications.';

  isOpen = {
    textTransform: false,
    dateFormat: false,
    numberFormat: false,
    stringOperations: false,
    jsonData: false
  };

  toggleSection(section: keyof typeof this.isOpen) {
    this.isOpen[section] = !this.isOpen[section];
  }

}
