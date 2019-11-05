import {Component, OnInit} from '@angular/core';
import {BookSeviceService} from '../book-sevice.service';
import {Book} from '../interface/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList: Book[];

  constructor(private bookSevice: BookSeviceService) {
  }

  ngOnInit() {
    this.bookSevice.getBook().subscribe(next => {
      this.bookList = next;
      console.log(this.bookList);
    });
  }

}
