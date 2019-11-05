import { Component, OnInit } from '@angular/core';
import {Book} from '../interface/book';
import {Subscription} from 'rxjs';
import {BookSeviceService} from '../book-sevice.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book: Book;
  sub: Subscription;
  message = '';

  constructor(private bookSevice: BookSeviceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookSevice.bookDetail(id).subscribe(next => {
        this.book = next;
      }, error => {
        console.log(error);
      });
    });
  }

  editBook(bookForm) {
    this.bookSevice.editBook(this.book.id, bookForm.value).subscribe(next => {
      this.message = 'Sách Đã Được Cập Nhật';
    }, error => {
      this.message = 'Cập Nhật Không Thành công';
    });
  }
}
