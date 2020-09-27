import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from "@angular/router";
import { DataService } from 'src/app/services/data.service';
import {Category, Post, PostResponse, PostStatus, PostType} from '../../models/index';
import {ConstantService} from 'src/app/services/constant.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  modalOptions: NgbModalOptions;
  id: string;
  posts: Post[];
  currentPost: Post;
  postResponse: PostResponse;
  responseMessage: string;
  responseAmount: number;
  responseSuccessAlert: boolean;

  constructor(private modalService: NgbModal, 
                private route: ActivatedRoute,
                private dataService: DataService,
                private constantService: ConstantService,
                private router: Router) {
    this.route.params.subscribe( params => this.id = params["id"] );
  }
  ngOnInit(): void {
    this.dataService.getPosts().subscribe(result => {
      this.posts = result;
      this.currentPost = this.posts.find(post => post.id === this.id);
      this.dataService.getPostCategory().subscribe(category =>{
        this.currentPost.category = category.find(res => res.id === this.currentPost.categoryId).categoryName;
      });
      this.dataService.getPostStatus().subscribe(status => {
        this.currentPost.postStatus = status.find(res => res.id === this.currentPost.postStatusId).postStatusName;
      });
      this.dataService.getPostTypes().subscribe(type => {
        this.currentPost.postType = type.find(res => res.id === this.currentPost.postTypeId).postTypeName;
      })
    });
  
  }

  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.sendResponse();
    });
  }

  navigateToSearchPage(){
    this.router.navigate(['/search']);
  }

  sendResponse(){
    debugger;
   this.postResponse = new PostResponse(this.constantService.currentUser.userName, this.currentPost.id,
                        this.responseMessage, this.responseAmount);
    this.dataService.createPostResponse(this.postResponse);
    this.responseSuccessAlert = true;
  }
}