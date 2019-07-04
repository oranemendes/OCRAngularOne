export class Post {
  public id: number;
  public title: string;
  public content: string;
  public imagePath: string;
  public loveIts: number;
  public created_at: Date;


  constructor(id: number | null, title: string, content: string, imagePath: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.imagePath = imagePath;
    this.loveIts = 0;
    this.created_at = new Date();
  }
}

