import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/index';
import {AgmMarker} from '@agm/core';
import { DataService } from 'src/app/services/data.service';
import { ConstantService } from 'src/app/services/constant.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  newPost: Post = new Post();
  position = {
    latitude: 51.678418,
    longitude: 7.809007,
  };
  constructor(private dataService: DataService, private constantService: ConstantService,
    private router: Router) { 
    this._getCurrentLocation();
  }
  ngOnInit(): void {
  }

  selectMarker($event: AgmMarker): void {
    console.log('select marker: ' + $event);
  }

  _getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this._setLocation(position.coords);
      });
    }
  }

  _setLocation(location): void {
    this.position = location;
  }

  createPost(){
    this.newPost.authorApproved = false;
    this.newPost.responderApproved = false;
    this.newPost.postStatusId = "1";
    this.newPost.authorName = this.constantService.currentUser;
    this.newPost.latitude = this.position.latitude;
    this.newPost.longitude = this.position.longitude;
    this.dataService.createPost(this.newPost);
  }

  navigateBack(){
    this.router.navigate(['/search']);
  }


}
