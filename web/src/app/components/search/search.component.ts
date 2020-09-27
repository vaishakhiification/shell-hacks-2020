import {Component, OnInit} from '@angular/core';
import {Post, SearchParameters} from '../../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  posts: Post[];
  searchParameter: SearchParameters;

  constructor() {
    this.posts = [];
    const p1 = new Post();
    p1.postTypeId = 1;
    p1.id = '1';
    p1.categoryId = 2;
    p1.description = 'hey new Message descrption1';
    p1.title = 'title one grocery';
    p1.authorName = 'Anjana';
    this.posts.push(p1);
    const p2 = new Post();
    p2.postTypeId = 1;
    p2.id = '2';
    p2.categoryId = 2;
    p2.description = 'have plants to give';
    p2.title = 'basil leaves';
    p2.authorName = 'Santhiya';
    this.posts.push(p2);
    this.searchParameter = null;
  }

  ngOnInit(): void {
  }

  setSearchParameter(searchParameter): void {
    this.searchParameter = searchParameter;
  }

}
