import { ChannelModel } from './../../../models/channel-model';
import { Component, OnInit } from '@angular/core';
import { ChannelsService } from 'src/app/services/channels.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-master',
	templateUrl: './master.component.html',
	styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
	showFiller = true;
	channels: any = [];
	selectedChannel = null;
	idChannel:any


	constructor(
		private channelService: ChannelsService,
		private router:Router
	) {}

	ngOnInit(): void {
		this.getChannels()
	}

	// Get Contas de usuarios
	getChannels() {
		this.channelService.getChannels().subscribe(channels => {
			this.selectedChannel = channels[0];
			this.getDataChannel(channels[0].id)
			this.channels = channels;
		});
	}

	// Seleciona conta
	selectChannel(channel: any) {
		this.selectedChannel = channel;

		// console.log(channel.id);
		// GEt id da Conta Selecionada
		this.getDataChannel(channel.id)
	}

	// GEt id da Conta iniciada e a Selecionada posteriormente
	getDataChannel = (id:any) => {
		this.idChannel = id
		this.routerHome(id)
	}

	// Adiciona o parametro na rota Home
	routerHome(id:any ){
		this.router.navigate(['home/'+ id ])
	}

} //END_CLASS
