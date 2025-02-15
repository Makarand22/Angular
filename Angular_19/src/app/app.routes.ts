import { Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
    { path: 'pipes', component: PipesComponent },
    { path: 'forms', component: FormsComponent },
];
