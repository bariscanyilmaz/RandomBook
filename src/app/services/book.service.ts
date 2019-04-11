import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Book } from "../models/book.model";
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private fireStore:AngularFirestore) { 

  }


  getBooks(){
    return this.fireStore.collection('Books').snapshotChanges();
  }

  addBook(book:Book){
    return this.fireStore.collection('Books').add(book);
  }

  updateBook(book:Book){
    this.fireStore.doc('Books/'+book.id).update(book);

  }

  deleteBook(book:Book){
      
  }

}
