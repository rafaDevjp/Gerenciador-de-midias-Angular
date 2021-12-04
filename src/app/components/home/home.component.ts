import { DataModel, ScheduleModel } from './../../models/schedule-model';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChannelsService } from 'src/app/services/channels.service';
import { SchedulesService } from 'src/app/services/schedules.service';
import { MatSort } from '@angular/material/sort';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

	displayedColumns: string[] = ['alvo', 'estado', 'imagem', 'canal', 'data', 'time'];
	dataSource:MatTableDataSource<DataModel>;
	schedules:ScheduleModel
	datas: Array<DataModel> =[]

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private scheduleService:SchedulesService,
		private channelService:ChannelsService
	) { }

	ngOnInit(){
		this.getSchedules()
	}

	//Get Schedules
	getSchedules(){
		this.scheduleService.getSchedules().subscribe(res =>{
			this.schedules = res
			this.datas = this.schedules.data
		 	this.dataSource = new MatTableDataSource(this.datas)
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort
			
		// console.log("POSTAGENS EM HOME  :: ", this.datas);
				
		})
	}

}
