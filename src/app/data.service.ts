import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://api.alperg.com/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.url);
  }
}
