import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportPanelRoutingModule } from './support-panel-routing.module';
import { SupportPanelComponent } from './support-panel.component';


@NgModule({
  declarations: [
    SupportPanelComponent
  ],
  imports: [
    CommonModule,
    SupportPanelRoutingModule
  ]
})
export class SupportPanelModule { }
