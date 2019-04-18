import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-addbook-dialog',
  templateUrl: './addbook-dialog.component.html',
  styleUrls: ['./addbook-dialog.component.css']
})
export class AddbookDialogComponent implements OnInit {

  addBookForm: FormGroup;
  bookCategories: FormArray;
  constructor(public dialogRef: MatDialogRef<AddbookDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Category[], private boookService: BookService, private formBuilder: FormBuilder) {
    this.addBookForm = this.formBuilder.group({
      bookName: '',
      bookAuthor: '',
      bookCategories: this.formBuilder.array([this.createCategoryControl()]),
      bookCoverPhoto: ''
    })
  }

  ngOnInit() {

  }

  cancel() {
    this.dialogRef.close();
  }

  save() {

    let b={

      ...this.addBookForm.getRawValue()  

    };
    let book= new Book();

    book.Name=b.bookName; 
    book.Author=b.bookAuthor;
    book.CoverPhoto=b.bookCoverPhoto;
    book.Categories=[];
    
    for (let index = 0; index < b.bookCategories.length; index++) {
      let category=b.bookCategories[index]['bookCategory']==null?"":b.bookCategories[index]['bookCategory'];
      book.Categories.push(category);
    }

    this.boookService.addBook(book).then(res=>this.dialogRef.close());
  }

  createCategoryControl(): FormGroup {
    return this.formBuilder.group({
      bookCategory: this.data
    });
  }

  addCategoryControl(): FormGroup {
    this.bookCategories = this.addBookForm.get('bookCategories') as FormArray;
    this.bookCategories.push(this.createCategoryControl());
    return this.formBuilder.group({
      bookCategory: this.data
    });
  }

  removeCategoryControl(i) {
    (this.bookCategories.removeAt(i));
  }

}
