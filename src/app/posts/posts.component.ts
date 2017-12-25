import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isLoadingResults = false;
  displayedColumns = ['id', 'userId', 'title', 'body'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.isLoadingResults = true;
    let url = "https://jsonplaceholder.typicode.com/posts";
    this._httpClient.get<PostsResponse[]>(url).subscribe(data => {
     this.dataSource.data = data;
     this.dataSource.paginator = this.paginator;
     this.isLoadingResults = false;
    });
  }

}
interface PostsResponse {
  userId : number;
  id: number;
  title: string;
  body: string;
}
