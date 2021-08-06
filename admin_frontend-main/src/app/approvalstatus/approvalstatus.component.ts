import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-approvalstatus',
  templateUrl: './approvalstatus.component.html',
  styleUrls: ['./approvalstatus.component.css']
})
export class ApprovalstatusComponent implements OnInit {
  
  post:any;

  constructor(private postservice:PostserviceService,private route: ActivatedRoute,private router:Router) { }
  imageWidth:number=200;
  imageMargin:number=30;
  item={
    PostTitle : '',
     CreatedTime : '',
     Description : '',
     Tag : '',
     Image : '',
     Author : '',
     AuthorID : '',
     Status : ''
   }
  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = routeParams.get('_id');
    
   
    this.postservice.getpost(postIdFromRoute)
    .subscribe(data =>{        
      this.post = data;
    });
  }
  approvePost(){
    this.postservice.approvePost(this.post)
    alert("Success");
    this.router.navigate(['/home-main']);
  }


}
