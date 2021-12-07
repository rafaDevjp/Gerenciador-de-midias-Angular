import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchedulesService } from 'src/app/services/schedules.service';
import { ChannelsService } from 'src/app/services/channels.service';
import { ChannelModel } from 'src/app/models/channel-model';

@Component({
	selector: 'app-feed-dialog',
	templateUrl: './feed-dialog.component.html',
	styleUrls: ['./feed-dialog.component.scss']
})

export class FeedDialogComponent implements OnInit {
	files: NgxFileDropEntry[] = [];
	channels: ChannelModel;
	registro = new Date()
	isChecked = false;
    hora = this.registro.getHours() < 10 ? '0' + this.registro.getHours() : this.registro.getHours();
    minutos = this.registro.getMinutes() < 10 ? '0' + this.registro.getMinutes() : this.registro.getMinutes() ;
    segundos =this.registro.getSeconds() < 10 ? '0' + this.registro.getSeconds() : this.registro.getSeconds();
	timePost = `${this.hora}:${this.minutos}:${this.segundos}`;



	constructor(
		public dialogRef: MatDialogRef<FeedDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private schedoleService: SchedulesService,
		private channelService: ChannelsService
	) { }





	formSchedule = this.fb.group({
		channel: ['', Validators.required],
		image: ['', Validators.required],
		date: this.registro = new Date(),
		type: ['', Validators.required],
		caption: [{ value: '', disabled: this.data.disabled }],
		now: [this.isChecked],
		status: [''],
		time: [this.timePost],
		user_id: [this.data.id]
	});


	// Inity Functions
	ngOnInit() {
    console.log( `${this.hora}:${this.minutos}:${this.minutos}`);
		this.channelService.getIdChannel(this.data.id).subscribe(res => {
			this.formSchedule.patchValue({ channel: res, time: this.timePost });
		})
		this.formSchedule.patchValue({ type: this.data.type });
	}

	// Close dialog
	onNoClick(): void {
		this.dialogRef.close();
	}

	// Creating a new schedule
	schedule() {
		this.formSchedule.patchValue({ status: this.formSchedule.value.now === true ? "Send" : "Waiting" });
		// console.warn("SUbmetido com sucesso", this.formSchedule.value.now);
		this.schedoleService.createSchedules(this.formSchedule.value).subscribe(() => {
			this.formSchedule.reset();
			this.onNoClick()
		})

	}

	// Fonção do Drag Drop
	dropped(files: NgxFileDropEntry[]) {
		this.files = files;
		for (const droppedFile of files) {
			if (droppedFile.fileEntry.isFile) {
				const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
				fileEntry.file((file: File) => {
					this.formSchedule.patchValue({ image: file });
				});
			} else {
				const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
				// console.log(droppedFile.relativePath, fileEntry);
			}
		}
	}

	// Enventos Drag Dropped
	fileOver(event) {
		console.log(event);
	}

	fileLeave(event) {
		console.log(event);
	}


}

