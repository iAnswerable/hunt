import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css']
})
export class UserpostsComponent implements OnInit {
  isLoadingResults = false;
  displayedColumns = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  userId: number;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private _httpClient: HttpClient, 
              private route: ActivatedRoute,
              private router: Router) { 
    this.route.params.subscribe( params => {
      this.userId = params['id'];
    });
  }

  ngOnInit() {
    this.isLoadingResults = true;
    let url = "https://jsonplaceholder.typicode.com/posts?userId=" + this.userId;
    this._httpClient.get<PostsResponse[]>(url).subscribe(data => {
     this.dataSource.data = data;
     this.dataSource.paginator = this.paginator;
     this.isLoadingResults = false;
    });
  }

  CreateNewPosts() {
    this.router.navigate(['add', this.userId]);
  }
}
interface PostsResponse {
  userId : number;
  id: number;
  title: string;
  body: string;
}
