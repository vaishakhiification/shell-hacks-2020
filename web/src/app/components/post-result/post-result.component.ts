import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models';

@Component({
  selector: 'app-post-result',
  templateUrl: './post-result.component.html',
  styleUrls: ['./post-result.component.css']
})
export class PostResultComponent implements OnInit {
  @Input() postInfo: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
