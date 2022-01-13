import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelBoardComponent } from './panel-board/panel-board.component';

let declarationsHolader = [
  PanelBoardComponent
]

let exportH = [PanelBoardComponent]

@NgModule({
  declarations: declarationsHolader,
  imports: [
    CommonModule
  ],
  exports: exportH
})
export class AdminPanelModule { }
