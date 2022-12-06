//import axios from "axios";

import { HttpClient } from "./02-open-close-c";

//desacoplar que las clases llamen directamente a axios
export class TodoService {
  constructor(private http: HttpClient) {}
  async getTodoItems() {
    /*     const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    ); */
    const data = await this.http.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  constructor(private http: HttpClient) {}
  async getPosts() {
    /*     const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); */
    const data = await this.http.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private http: HttpClient) {}
  async getPhotos() {
    /*     const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    ); */
    const data = await this.http.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
