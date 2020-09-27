import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchParameters} from '../../models';

@Component({
  selector: 'app-post-search-sidebar',
  templateUrl: './post-search-sidebar.component.html',
  styleUrls: ['./post-search-sidebar.component.css']
})
export class PostSearchSidebarComponent implements OnInit {
  @Input() search: (args: SearchParameters) => void;
  searchText: string;
  postType: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  searchPosts(): void {
    const parameters = new SearchParameters();
    if (this.searchText){
      parameters.keyword = this.searchText;
    }
    parameters.postTypeId = this.postType;
    this.search(parameters);
  }

}
