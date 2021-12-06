
import { DataModel, ScheduleModel } from '../models/schedule-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError, find, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

   baseURL = 'api/schedules/';

  constructor(
      private http:HttpClient
  ) { }

  //Métodos

  getSchedules(): Observable<ScheduleModel>{
    return this.http.get<ScheduleModel>(this.baseURL).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) =>{
        console.log(error);
        return throwError(error)

      })
    )
  }

  createSchedules(schedule: ScheduleModel): Observable<ScheduleModel>{
    return this.http.post<ScheduleModel>(this.baseURL, schedule ).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error)
      })
    )
  }

 

  updateSchedule(schedule:any, id:any): Observable<ScheduleModel>{
    const url = `${this.baseURL}/${id}`
    return this.http.put<ScheduleModel>(url, schedule).pipe(
      retry(2),
      catchError((error:HttpErrorResponse) => {
        console.log(error);
        return throwError(error)
      })
    )
  }

  deleteSchedule(id: any): Observable<ScheduleModel>{
    const url  = `${this.baseURL}/${id}`
    return this.http.delete<ScheduleModel>(url).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error)
      })
    )
  }

}
