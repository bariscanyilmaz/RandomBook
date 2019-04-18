import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/book.model';
import { CategoryService } from './services/category.service';
import { Category } from './models/category.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';
import { AddbookDialogComponent } from './components/addbook-dialog/addbook-dialog.component';
import { AddcategoryDialogComponent } from './components/addcategory-dialog/addcategory-dialog.component';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books: Book[];
  categories: Category[];
 
  book:Book;
  @ViewChild('swalInformation') swallInformation:SwalComponent;
  @ViewChild('categoryGroup') categoryGroup:MatButtonToggleGroup;

  constructor(private bookSerivce: BookService, private categorySerivce: CategoryService,public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getBooks();
    this.getCategories();
    
  }

  getBooks() {
    this.bookSerivce.getBooks().subscribe(data => {
      
      this.books= data.map(e => {
        return {
          id: e.payload.doc.id,

          ...e.payload.doc.data()
        } as Book;
      });
    });
  }


  addBook() {

  }

  deleteBook() {

  }

  getBook(category: string) {

    this.bookSerivce.getBook(category).subscribe((d:Book[])=>{
   
      if(d.length>0){

        this.book=d[Math.floor(Math.random()*d.length)];
        this.openDialog();
      }else{
        this.swallInformation.title=category;
        this.swallInformation.show();
      }
    });
  }

  getCategories() {
    this.categorySerivce.getCategories().subscribe(data => {
      this.categories = data.map(c => {
        return {
          id: c.payload.doc.id,
          ...c.payload.doc.data()
        } as Category;
      });
    });

  }

  

  openDialog(){
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width:'500px',
      height:'330px',
      data: this.book
    });
  }

  openAddBook(){
    const dialogRef = this.dialog.open(AddbookDialogComponent, {
      
      width:'500px',
      height:'auto',
      minHeight:'330px',
      data: this.categories

    });
  }

  
  openAddCategory(){
    const dialogRef = this.dialog.open(AddcategoryDialogComponent, {
      width:'500px',
      height:'270px'
      
    });
  }

}
