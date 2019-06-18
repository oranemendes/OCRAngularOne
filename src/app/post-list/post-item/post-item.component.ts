import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
    this.onLikeClick();
    this.onDislikeClick();
  }


  onLikeClick() {
    this.post.loveIts += 1;
    console.log(this.post.loveIts);
    return this.post.loveIts;
  }

  onDislikeClick() {
    this.post.loveIts -= 1;
    console.log(this.post.loveIts);
    return this.post.loveIts;
  }

}
