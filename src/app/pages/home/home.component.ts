import { Component, OnInit } from '@angular/core';
import {Book, LotteryDataService} from '../../services/lottery-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[];

  constructor(private lotteryDataService: LotteryDataService) { }

  ngOnInit() {
    this
      .lotteryDataService
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

}
