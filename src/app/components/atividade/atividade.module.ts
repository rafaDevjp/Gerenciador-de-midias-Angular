import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtividadeRoutingModule } from './atividade-routing.module';
import { AtividadeComponent } from './atividade.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AtividadeComponent],
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
  ]
})
export class AtividadeModule { }
