import { Routes } from '@angular/router';
import { PipesComponent } from './Components/pipes/pipes.component';
import { FormsComponent } from './Components/forms/forms.component';
import { DynamicFormsComponent } from './Components/forms/dynamic-forms/dynamic-forms.component';
import { ReactiveFormsComponent } from './Components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './Components/forms/template-driven-form/template-driven-form.component';


export const routes: Routes = [
    { path: 'pipes', component: PipesComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'dynamic-form', component: DynamicFormsComponent },
    { path: 'reactive-form', component: ReactiveFormsComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },

];
