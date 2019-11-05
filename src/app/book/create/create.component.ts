import { Component, OnInit } from '@angular/core';
import {BookSeviceService} from '../book-sevice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  message = '';

  constructor(private bookSevice: BookSeviceService) {
  }

  ngOnInit() {
  }

  createBook(bookForm) {
    this.bookSevice.bookCreate(bookForm.value).subscribe(() => {
      this.message = 'Tạo Mới Thành Công';
    }, error => {
      this.message = 'Tạo Mới Thất Bại';
    });
  }

}
