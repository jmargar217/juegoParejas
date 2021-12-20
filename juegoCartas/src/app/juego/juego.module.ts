import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    GameCardComponent,
    RestartDialogComponent,

  ],
  exports:[
    GameCardComponent,
    RestartDialogComponent

  ],
  imports: [
    CommonModule,
    MatDialogModule

  ]
})
export class JuegoModule { }
