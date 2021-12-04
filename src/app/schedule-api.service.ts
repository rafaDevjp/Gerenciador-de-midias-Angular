
import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS, } from 'angular-in-memory-web-api';
import { schedules, channels } from './fake-api';

export class ScheduleAPIService implements InMemoryDbService {
	schedules: any = [];
	channels: any =[]

	constructor() {
		this.schedules = schedules;
	}

	// inicia o banco
	createDb() {
		return {
			schedules: this.schedules,
			channels,
		};
	}

	//
	post(reqInfo: RequestInfo) {
		const collectionName = reqInfo.collectionName;
		console.log('post::', collectionName);

		if (collectionName === 'schedules') {
			return this.createSchedules(reqInfo);
		}
		return undefined;
	}

	//
	private createSchedules(reqInfo) {
		const body = reqInfo.utils.getJsonBody(reqInfo.req);

		console.log(body);
		
		this.schedules.data.push(scheduleFactory(body));
		
		const options: ResponseOptions = {
			body: { data: body },
			status: STATUS.OK,
			headers: reqInfo.headers,
			url: reqInfo.url,
		};

		return reqInfo.utils.createResponse$(() => options);
	}


}// END_CLASS


export const scheduleFactory = (args) => ({
	id: Math.floor(Math.random() * 100000000),
	user_id: args.user_id,
	created_at: new Date(),
	status: args.status,
	now: args.now,
	date: args.date,
	time: args.time,
	caption: args.caption,
	ig_code: null,
	is_history: false,
	is_album: false,
	is_igtv: false,
	is_reels: false,
	ig_image_url: null,
	type: args.type,
	media_type: 'photo',
	image: {
		id: Math.floor(Math.random() * 1000),
		filename: args.image.name,
		is_album: false,
		url:
			'https://www.tartarugatigredagua.com.br/2016-large_default/pavao-azul-filhote-adulto-ovos-galados.jpg',
		type: null,
	},
	channel: {
		id: args.channel.id,
		username: args.channel.user.username,
		profile_pic: args.channel.user.profile_pic,
	},
	socials: [],
});

