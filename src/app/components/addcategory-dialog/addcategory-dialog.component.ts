import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { MatDialogRef } from '@angular/material';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addcategory-dialog',
  templateUrl: './addcategory-dialog.component.html',
  styleUrls: ['./addcategory-dialog.component.css']
})
export class AddcategoryDialogComponent implements OnInit {

  category:string='';

  constructor(public dialogRef: MatDialogRef<AddcategoryDialogComponent>,private categoryService:CategoryService) { }

  ngOnInit() {
    
  }
  cancel(){
    this.dialogRef.close();
  }

  addCategory(){
    let category=new Category();
    category.Name=this.category;
    this.categoryService.addCategory(category).then(()=>this.cancel());
  }
}
