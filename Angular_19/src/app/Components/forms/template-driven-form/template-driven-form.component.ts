import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterEvent, RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  imports: [RouterModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

}
