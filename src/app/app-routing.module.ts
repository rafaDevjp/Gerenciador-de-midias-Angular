import { MasterComponent } from './components/master/master/master.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
	{
		path:'',
		component: MasterComponent,
		children:[
			{ 	
				path: '',                                 //Redirect for componet
				redirectTo: 'home', pathMatch: 'full' 
			},                                         
			{
				path: 'home/:data',
				loadChildren: () => import('./components/home/home.module')
				.then(m => m.HomeModule)
			},
			{ 
				path: 'new-post/:data',
				loadChildren: () => import('./components/new-post/new-post.module')
				.then(m => m.NewPostModule) 
			},
			{ 
				path: 'atividade/:data', 
				loadChildren: () => import('./components/atividade/atividade.module')
				.then(m => m.AtividadeModule) 
			},

		]
	},

	{ path: '**', component: Error404Component },  // Wildcard route for a 404
]


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
