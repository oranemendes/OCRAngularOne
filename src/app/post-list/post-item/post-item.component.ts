import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.onLikeClick();
    this.onDislikeClick();
  }


  onLikeClick() {
    this.post.loveIts += 1;
    return this.post.loveIts;
  }

  onDislikeClick() {
    this.post.loveIts -= 1;
    return this.post.loveIts;
  }

  onDelete() {
    this.postService.deleteOldArticle(this.post);
  }

}
