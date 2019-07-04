export class Post {
  public id: number;
  public title: string;
  public content: string;
  public imagePath: string;
  public loveIts: number;
  public created_at: Date;


  constructor(id: number, title: string, content: string, imagePath: string, loveIts: number, created_at: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.imagePath = imagePath;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}

