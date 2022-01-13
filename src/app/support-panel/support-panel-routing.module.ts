import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportPanelComponent } from './support-panel.component';

const routes: Routes = [
  { path: '', component: SupportPanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportPanelRoutingModule { }
