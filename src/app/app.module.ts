import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFirestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatDialogModule} from '@angular/material/dialog';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';
import { AddbookDialogComponent } from './components/addbook-dialog/addbook-dialog.component';
import { AddcategoryDialogComponent } from './components/addcategory-dialog/addcategory-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BookDialogComponent,
    AddbookDialogComponent,
    AddcategoryDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  entryComponents: [
    BookDialogComponent,
    AddcategoryDialogComponent,
    AddbookDialogComponent
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
