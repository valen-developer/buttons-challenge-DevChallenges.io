import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/pages/buttons/buttons.component';
import { InputsComponent } from './components/pages/inputs/inputs.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'inputs', component: InputsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'buttons' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
