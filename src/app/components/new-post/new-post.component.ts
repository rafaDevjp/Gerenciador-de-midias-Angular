import { ChannelModel } from './../../models/channel-model';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from 'src/app/services/channels.service';
import { FeedDialogComponent } from '../dialogs/feed-dialog/feed-dialog.component';



@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.scss']
})




export class NewPostComponent implements OnInit {
	id_params: any;
	channel: ChannelModel;

	constructor(
		public dialog: MatDialog,
		private activated: ActivatedRoute,
		private cheannelService: ChannelsService
	) { }



	ngOnInit(): void {
		this.id_params = this.activated.snapshot.paramMap.get('data')// GEt type ID params
		// console.log(this.id_params);
		this.cheannelService.getIdChannel(this.id_params).subscribe(res => {
			this.channel = res
			// console.log("Valor De new-post: ", this.channel);

		})

   
    }

	//Open dialog Feed
	openFeedDialog(): void {
		const dialogRef = this.dialog.open(FeedDialogComponent, {
			width: '950px',
			height: '600px',
			data: {
				type: "Feed",
				id: this.id_params,
				user: this.channel.user.username,
				avata: this.channel.user.profile_pic_url,
				disabled: false
			}
		});

		dialogRef.afterClosed().subscribe(result => {
		});
	}

	//Open dialog Story
	openStoryDialog(): void {
		const dialogRef = this.dialog.open(FeedDialogComponent, {
			width: '950px',
			height: '600px',
			data: {
				type: "Story",
				id: this.id_params,
				user: this.channel.user.username,
				avata: this.channel.user.profile_pic_url,
				disabled: true
			}
		});

		dialogRef.afterClosed().subscribe(result => {
		});
	}

	//Open dialog Carrossel
	openMensageDialog(): void {
		const dialogRef = this.dialog.open(FeedDialogComponent, {
			width: '950px',
			height: '600px',
			data: {
				type: "Carrosel",
				id: this.id_params,
				user: this.channel.user.username,
				avata: this.channel.user.profile_pic_url,
				disabled: false
			}
		});

		dialogRef.afterClosed().subscribe(result => {
		});
	}

}//END_CLASS


