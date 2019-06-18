import { Component, OnInit } from '@angular/core';
import {Post} from './post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [
    new Post('Premier post', 'Un sourire coûte moins cher que l"\électricité, mais donne autant de lumière. - Abbé Pierre',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Abb%C3%A9_Pierre_%281955%29.jpg/220px-Abb%C3%A9_Pierre_%281955%29.jpg',
      0, new Date('2018-09-05T08:30:24')),
    new Post('Premier post', 'Un sourire coûte moins cher que l"\électricité, mais donne autant de lumière. - Abbé Pierre',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Abb%C3%A9_Pierre_%281955%29.jpg/220px-Abb%C3%A9_Pierre_%281955%29.jpg',
      0, new Date('2018-09-05T08:30:24'))
  ];

  constructor() { }

  ngOnInit() {
  }

}
