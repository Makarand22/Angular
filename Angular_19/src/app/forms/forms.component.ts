import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  formsData = [
    {
      title: "Template Driven Form",
      description: "Uses Angular directives in the template (HTML) to manage form controls. Relies on the FormsModule. Suitable for simple forms with minimal validation. Uses ngModel for two-way data binding.",
      buttonText: "open",
      footerText: "FormsModule | Uses ngModel for two-way binding | Simple, less scalable | Directive-based validation"
    },
    {
      title: "Reactive Form",
      description: "Uses an explicit and structured approach with form controls in the component class. Relies on ReactiveFormsModule. Suitable for complex forms with dynamic validation. Uses FormControl, FormGroup, and FormBuilder for better scalability.",
      buttonText: "open",
      footerText: "ReactiveFormsModule | Uses FormControl, FormGroup | Highly scalable | Explicit TypeScript validation"
    },
    {
      title: "Dynamic Form",
      description: "Uses the Reactive Forms approach to generate form controls dynamically at runtime. Helpful when form structure is not known beforehand. Often used with FormArray.",
      buttonText: "open",
      footerText: "ReactiveFormsModule | Uses FormArray for dynamic fields | Best for unknown form structures | Runtime-generated controls"
    }
  ]

}
