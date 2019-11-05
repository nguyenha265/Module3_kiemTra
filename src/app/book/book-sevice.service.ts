import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Book} from './interface/book';

@Injectable({
  providedIn: 'root'
})
export class BookSeviceService {
  constructor(private http: HttpClient) {
  }

  getBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  bookCreate(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }

  editBook(id: number, book: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/books/${id}`, book);
  }

  bookDetail(id: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  bookDelete(id: number): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
}

