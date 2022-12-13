import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebAPiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  //const JsondBService = new JsonDataBaseService();
  //const localService = new LocalDataBaseService();
  const provider = new WebAPiPostService();
  //Cambiar ahora los servicios es super sencillo
  //Esto facilmente podria ser un mongo,mysql, graphQL y es desconectar conectar
  const postService = new PostService(provider);
  const posts = await postService.getPosts();

  console.log({ posts });
})();
