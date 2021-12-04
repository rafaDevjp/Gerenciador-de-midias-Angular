import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPostRoutingModule } from './new-post-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [NewPostComponent],
  imports: [
    CommonModule,
    NewPostRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class NewPostModule { }
