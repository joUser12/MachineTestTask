import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = "https://54s06fdp-3520.inc1.devtunnels.ms/user/Get_Dashboard/"

  constructor(private http: HttpClient) { }

  // getData
  fetchData() {
    return this.http.get(this.baseUrl)
  }
}
