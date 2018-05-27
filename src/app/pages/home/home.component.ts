import { Component, OnInit } from '@angular/core';
import {Book, LatestDraw, LotteryDataService} from '../../services/lottery-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Array<Book>;
  draw: LatestDraw;

  constructor(private lotteryDataService: LotteryDataService) { }

  ngOnInit() {
    this
      .lotteryDataService
      .getBooks()
      .subscribe((data: Array<Book>) => {
        this.books = data;
      });
    this
      .lotteryDataService
      .getLatestDraw()
      .subscribe((data: LatestDraw) => {
        this.draw = data;
      });
  }

}
