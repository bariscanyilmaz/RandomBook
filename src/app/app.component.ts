import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/book.model';
import { Observable } from 'rxjs';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books: Book[];

  constructor(private bookSerivce: BookService) {

  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookSerivce.getBooks().subscribe(data => {
      this.books = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Book;
      });
    });
  }

  addBook(){

  }

  deleteBook(){

  }

}
