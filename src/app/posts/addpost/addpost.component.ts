import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  title:string = '';
  body:string = '';
  userId : number;
  constructor(private fb: FormBuilder, 
              private _httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { 
    this.rForm = fb.group({
      'title' : [null, Validators.required],
      'body' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
      'validate' : ''
    });

    this.route.params.subscribe( params => {
      this.userId = params['userId'];
    });
  }

  ngOnInit() {
  }

  addPost(post) {
    let postRequest = new PostsRequest();
    postRequest.userId = this.userId;
    postRequest.title = post.title;
    postRequest.body = post.body;
    let url = "https://jsonplaceholder.typicode.com/posts";
    const req = this._httpClient.post<PostsRequest>(url, postRequest)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['user', res.userId]); 
        },
        err => {
          console.log("Error occured");
        }
      );

  }

}

class PostsRequest {
  userId : number;
  title: string;
  body: string;
}
