import { DataModel, ScheduleModel } from './../../models/schedule-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ChannelsService } from 'src/app/services/channels.service';
import { SchedulesService } from 'src/app/services/schedules.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {
  displayedColumns: string[] = ['alvo', 'estado', 'imagem', 'canal', 'data', 'time'];
	dataSource:MatTableDataSource<DataModel>;
	schedules:ScheduleModel
	datas: Array<DataModel> =[]
  id_params: any;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private scheduleService:SchedulesService,
		private channelService:ChannelsService,
    private activated: ActivatedRoute
	) { }

	ngOnInit(){	
    this.id_params = this.activated.snapshot.paramMap.get('data')// GEt type ID params 
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
			
		// console.log("POSTAGENS EM ATIVIDADES  :: ", this.datas);
				
		})
	}

}
