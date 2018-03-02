import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data-service/data.service';

import {Post} from '../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts: Post[] = [];

  constructor( public dataService: DataService ) {

    this.dataService.getPosts().then( (posts) => {
      console.log(posts);
      this.posts = posts;
    }).catch( () => {

    });

  }

  ngOnInit() {
  }

}
