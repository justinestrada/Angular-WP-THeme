
export class Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author_id: number;
  angular_spa_meta: {
    user_nicename: string;
    user_permalink: string;
    thumbnail: string;
  };
}
