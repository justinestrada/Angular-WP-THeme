import { Injectable } from '@angular/core';

import * as models from '../../components/models';

@Injectable()
export class ModelService {

  constructor() { }

  toPost(post: any) {
    let new_post = new models.Post();

    new_post.id = post.id;
    new_post.date = post.date;
    new_post.title = post.title;
    new_post.excerpt = post.excerpt;
    new_post.author_id = post.author_id;
    new_post.angular_spa_meta = post.angular_spa_meta;

    return new_post;
  }

}
