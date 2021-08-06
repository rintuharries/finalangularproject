import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  isnoteditable: boolean = true;
  post: any;
  constructor(private route: ActivatedRoute, private router: Router, private postservice: PostserviceService) { }
  postDetail = {
    PostTitle: '',
    Description: '',
    Tag: '',
    Image: '',
    Status:''
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = routeParams.get('_id');
    this.postservice.getpost(postIdFromRoute)
      .subscribe(data => {
        this.post = data;
        localStorage.setItem('postobjectid', this.post._id.toString());

      });

  }
 adminapprove(){
  this.post.Status='Approved';
  console.log("Admin approved status:"+this.post.Status);
  console.log("Admin approved status:"+this.post._id);

  this.postservice.adminapprove(this.post);
  this.router.navigate(['/home-main']);
  console.log("post details are" + this.post.PostTitle); 

 }
  
 
  adminreject() {
    this.post.Status='Rejected';
    this.postservice.adminreject(this.post);
    console.log("post details are" + this.post.PostTitle);
  }
}
