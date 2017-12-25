import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : UserResponse[];
  isLoadingResults = false;
  displayedColumns = ['id', 'name', 'username', 'email'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.isLoadingResults = true;
    let url = "https://jsonplaceholder.typicode.com/users";
    this._httpClient.get<UserResponse[]>(url).subscribe(data => {
     this.users = data;
     console.log(this.users);
     this.dataSource.data = data;
     this.dataSource.paginator = this.paginator;
     this.isLoadingResults = false;
    });
  }

  ViewPosts(data){
    console.log(data.id);
    this.router.navigate(['user', data.id]); 
  }
}

interface UserResponse{
  id : number;
  name : string;
  username : string;
  email : string;
}
