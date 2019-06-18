export class Post {
  public title: string;
  public content: string;
  public imagePath: string;
  public loveIts: number;
  public created_at: Date;


  constructor(title: string, content: string, imagePath: string, loveIts: number, created_at: Date) {
    this.title = title;
    this.content = content;
    this.imagePath = imagePath;
    this.loveIts = loveIts;
    this.created_at = created_at;
  }
}

