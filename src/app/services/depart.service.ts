import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDepart } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartService {

  private _depart: string = "assets/content-data/depart.json";



  constructor(private http: HttpClient) { }

  getDepartInfo(): Observable<IDepart[]> {
    return this.http.get<IDepart[]>(this._depart);
  }

}
