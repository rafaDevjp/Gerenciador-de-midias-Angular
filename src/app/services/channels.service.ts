import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { ChannelModel } from '../models/channel-model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  baseURL = 'api/channels';

  constructor(private http: HttpClient) { }


  getChannels(): Observable<ChannelModel[]>{
    return this.http.get<ChannelModel[]>(this.baseURL).pipe(
      retry(2),
      catchError( (error: HttpErrorResponse) => { 
          return throwError(error) })
    )
  }

  getIdChannel(id:any): Observable<ChannelModel>{
    const url = `${this.baseURL}/${id}`;
    return this.http.get<ChannelModel>(url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        return throwError(error)
      })
    )
  }

}//END_CLASS
