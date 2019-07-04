import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-list/post-item/post-item.component';
import {PostService} from './services/post.service';
import { HeaderComponent } from './header/header.component';

import {RouterModule, Routes} from '@angular/router';
import { NewArticleComponent } from './new-article/new-article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'new', component: NewArticleComponent },
  { path: '', component: PostListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent,
    PostItemComponent,
    HeaderComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
