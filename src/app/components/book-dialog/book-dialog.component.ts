import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent implements OnInit{

  colors: string[] = ["#DCD5FE", "#D5B6ED", "#9BDAF9", "#4A4C73", "#EBD3DB", "#9F96DD", "#C8BFFF"];
  colorIndex=0;
  @ViewChild('book') book: ElementRef<HTMLDivElement>;

  constructor(public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {

  }

  ngOnInit() {
    this.book.nativeElement.style.backgroundColor=this.randomColor();
  }

  randomColor() {
    let color = this.colors[Math.floor(Math.random() * this.colors.length)];
    return color;
  }

}
