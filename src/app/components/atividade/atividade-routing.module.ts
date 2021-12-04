import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadeComponent } from './atividade.component';

const routes: Routes = [{ path: '', component: AtividadeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadeRoutingModule { }
