import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LotteryDataService {

  url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getBooks() {
    return this
      .http
      .get(`${this.url}/books`);
  }

  getLatestDraw() {
    return this
      .http
      .get(`${this.url}/latestdraw`);
  }
}

export interface Book {
  id: Number;
  name: String;
  author: String;
}

export interface LatestDraw {
  drawdate: Date;
  drawid: Number;
  numbers: Array<Number>;
}
