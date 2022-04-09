import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAboutinfo } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {
  private _url: string = "assets/content-data/aboutUs.json";


  constructor(private http: HttpClient) { }

  getAboutInfo(): Observable<IAboutinfo[]> {
    return this.http.get<IAboutinfo[]>(this._url);


  }
}
