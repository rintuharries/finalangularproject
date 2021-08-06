import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  post={
    _id : '',
    PostTitle : '',
    CreatedTime : '',
    Description : '',
    Tag : '',
    Status : '',
    Image : '',
    Author : '',
    AuthorID : ''
  }
  constructor(private router: Router, private postservice: PostserviceService) { }

  ngOnInit(): void {
    this.postservice.getposts().subscribe((data: any)=>{
      this.post=JSON.parse(JSON.stringify(data));
    })
  }

}
