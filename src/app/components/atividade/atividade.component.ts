import { DataModel, ScheduleModel } from './../../models/schedule-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SchedulesService } from 'src/app/services/schedules.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {
  displayedColumns: string[] = ['alvo', 'estado', 'imagem', 'canal', 'data', 'time'];
  dataSource:MatTableDataSource<DataModel>;
  schedules:ScheduleModel;
  datas: Array<DataModel> =[];
  dataProfile: Array<DataModel> =[];
  id_params: any;
  userNameProfile = ''
  registIsNotFound: boolean = false


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private channelService: ChannelsService,
    private scheduleService:SchedulesService,
    private activated: ActivatedRoute
  ) { }

  ngOnInit(){
    this.id_params = this.activated.snapshot.paramMap.get('data')// GEt type ID params
    this.getSchedules(this.id_params);
    this.getIdChannel(this.id_params);
  }

  // Get Channels por ID
  getIdChannel(args){
    this.channelService.getIdChannel(args).subscribe(res => {
          // console.log(res.user.username);
          this.userNameProfile = res.user.username
    })
  }

  //Get Schedules
  getSchedules(args){
      this.scheduleService.getSchedules().subscribe(res =>{
      this.schedules = res;
      this.datas = this.schedules.data;
      this.dataProfile = this.datas.filter(post => post.user_id == args);
            // console.log( this.dataProfile);
            if (this.dataProfile.length == 0) {
                return this.registIsNotFound = true;
            }

      this.dataSource = new MatTableDataSource(this.dataProfile);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.userNameProfile = this.dataProfile[0].channel.username
      // console.log("POSTAGENS do USUARIO :: ", this.dataProfile[0].channel.username);
      console.log("POSTAGENS EM ATIVIDADES  :: ", this.dataProfile);

    })
  }

}
