import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  public isLoved: boolean;

  @Input() post;

  constructor() { }

  ngOnInit() {
    this.getLoved();
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

  getLoved() {
    if (this.post.loveIts > 0) {
      return 'alert-success';
    } else if (this.post.loveIts < 0) {
      return 'alert-warning';
    }
  }

}
