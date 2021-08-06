import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any=[{
    _id : '',
    PostTitle : '',
    CreatedTime : '',
    Description : '',
    Tag : '',
    Status : '',
    Image : '',
    Author : '',
    AuthorID : ''
  }]
  

  constructor(private router: Router, private postservice: PostserviceService) { }


  ngOnInit(): void {
    this.postservice.getposts()
    .subscribe(data =>{
      this.posts=data;
      console.log("Post details"+data);
    })  
  }
}
