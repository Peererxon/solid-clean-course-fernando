import { PostProvider } from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];
  private dataBaseService: PostProvider;
  //dependemos de abstracciones
  constructor(dbS: PostProvider) {
    this.dataBaseService = dbS;
  }

  async getPosts() {
    this.posts = await this.dataBaseService.getPosts();
    return this.posts;
  }
}
