import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Book } from "../models/book.model";
import { Category } from '../models/category.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {


  private bookCollection: AngularFirestoreCollection<Book>;
  private categoryCollection: AngularFirestoreCollection<Category>;

  constructor(private fireStore: AngularFirestore) {
    this.bookCollection = fireStore.collection<Book>('Books');
    this.categoryCollection = fireStore.collection<Book>('Category');
  }

  getBooks() {
    return this.fireStore.collection('Books').snapshotChanges();
  }

  addBook(book: Book) {
    return this.fireStore.collection('Books').add({...book});
  }

  updateBook(book: Book) {
    this.fireStore.doc('Books/' + book.id).update(book);

  }

  deleteBook(book: Book) {

  }

  getBook(category: string) {
    return this.fireStore.collection('Books',ref=>ref.where('Categories','array-contains',category).limit(1)).valueChanges();
  }
  // let result= this.bookCollection.ref.where('Categories','array-contains',`/Categories/${categoryId}`).limit(1).get();
  // result.then(d=>console.log(d.docs));
  //return this.fireStore.collection('Books',ref=>ref.where('Categories','array-contains',categoryId).limit(1)).valueChanges();

}


