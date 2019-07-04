import {Post} from '../post-list/post.model';

export class PostService {
  posts: Post[] = [
    new Post(1,'Premier post', 'Un sourire coûte moins cher que l"\électricité, mais donne autant de lumière. - Abbé Pierre',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Abb%C3%A9_Pierre_%281955%29.jpg/220px-Abb%C3%A9_Pierre_%281955%29.jpg',
      0, new Date('2018-09-05T08:30:24')),
    new Post(2,'Second Post', 'Ne demeure pas dans le passé, ne rêve pas du futur, concentre ton esprit sur le moment présent. - Bouddha',
      'https://previews.123rf.com/images/mai111/mai1111512/mai111151200008/49983003-image-de-bouddha-statue-de-bouddha-utilis%C3%A9-comme-amulettes-du-bouddhisme-la-religion.jpg',
      0, new Date('2018-10-14T08:52:24')),
    new Post(3,'Troisième post', 'La vie est un mystère qu\'il faut vivre, et non un problème à résoudre. - Gandhi',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/260px-Mahatma-Gandhi%2C_studio%2C_1931.jpg',
      0, new Date('2018-12-22T14:28:24')),
    new Post(4,'Quatrième post', 'Ce qui empêche les gens de vivre ensemlble, c\'est leur connerie, pas leurs différences ... - Anna Gavalda',
      'https://surlaroutedejostein.files.wordpress.com/2014/03/photo-anna-gavalda-lucky-libre-de-droit-d-r.jpg',
      0, new Date('2019-02-14T18:32:49'))
    ];

  addNewArticle() {

  }

  deleteOldArticle(i: number) {

  }

}
