import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStaff } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private _url: string = "assets/content-data/staff.json";


  constructor(private http: HttpClient) { }

  getStaffInfo(): Observable<IStaff[]> {
    return this.http.get<IStaff[]>(this._url);


  }
}
