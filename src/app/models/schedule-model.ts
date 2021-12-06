


export interface ScheduleModel {

    status: string;
    start_date: string;
    end_date: string;
    data: Array<DataModel>;

}

export interface DataModel{
    id: number;
    user_id: any;
    created_at: any;
    status: string;
    now: boolean;
    date: any;
    caption: string;
    ig_code: any;
    is_history: boolean;
    is_album: boolean;
    is_igtv: boolean;
    is_reels: boolean;
    ig_image_url:any;
    type: string;
    media_type: string;
    image: any;
    channel: any;
    socials: []
}

